/**
 * Descarga todas las imágenes del demo Seonex en vivo.
 * Uso: node scripts/fetch-images.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const PUBLIC_IMAGES = path.join(ROOT, 'public', 'images')
const LOCAL_SRC = path.join(ROOT, '..', 'seonex', 'assets', 'images')
const LIVE_BASE = 'https://tfseonex.vercel.app/assets/images'

/** Todas las rutas referenciadas en index.html (Digital Marketing) */
const PATHS = [
  'favicon.svg',
  'section/img-hero-1.jpg',
  'section/img-hero-2.jpg',
  'section/img-section-strategy.jpg',
  'section/img-video.jpg',
  'section/bg-box-quote.jpg',
  'section/img-section-team.jpg',
  'section/img-section-why.jpg',
  'section/img-section-why-2.jpg',
  'section/img-section-why-3.jpg',
  'section/img-section-why-4.jpg',
  'section/img-section-blog.jpg',
  'section/img-footer-title.jpg',
  'widget/img-bg-hero-h1.png',
  'widget/img-according.jpg',
  'widget/img-section-services.jpg',
  'widget/img-working-proccess-1.jpg',
  'widget/img-working-proccess-2.jpg',
  'widget/img-working-proccess-3.jpg',
  'widget/img-working-proccess-4.jpg',
  'widget/img-working-proccess-5.jpg',
  'widget/pop-up-siderbar-1.jpg',
  'widget/pop-up-siderbar-2.jpg',
  'widget/pop-up-siderbar-3.jpg',
  'widget/pop-up-siderbar-4.jpg',
  'avatar/avt-team-1.jpg',
  'avatar/avt-team-2.jpg',
  'avatar/avt-team-3.jpg',
  'avatar/avt-testimonial.jpg',
  'avatar/avt-tes-1.jpg',
  'avatar/avt-tes-2.jpg',
  'avatar/avt-tes-3.jpg',
  'avatar/avt-tes-4.jpg',
  'avatar/avt-blog.jpg',
  'team/img-team-1.jpg',
  'team/img-team-2.jpg',
  'team/img-team-3.jpg',
  'team/img-team-4.jpg',
  'team/img-team-5.jpg',
  'project/project-item-1.jpg',
  'project/project-item-2.jpg',
  'project/project-item-3.jpg',
  'project/project-item-4.jpg',
  'project/project-item-5.jpg',
  'project/project-item-6.jpg',
  'blog/img-blog-card-8.jpg',
  'blog/img-blog-card-9.jpg',
  'blog/img-blog-card-10.jpg',
  'logo/logo.svg',
  'logo/logo-marketing-card.svg',
  'logo/logo-mobi-1.svg',
  'logo/logo-2.svg',
  'icon/brand-1.svg',
  'icon/brand-2.svg',
  'icon/brand-3.svg',
  'icon/brand-4.svg',
  'icon/brand-5.svg',
  'icon/brand-6.svg',
  'icon/hover-brand-1.svg',
  'icon/hover-brand-2.svg',
  'icon/hover-brand-3.svg',
  'icon/hover-brand-4.svg',
  'icon/hover-brand-5.svg',
  'icon/hover-brand-6.svg',
]

async function download(url, dest) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  const buf = Buffer.from(await res.arrayBuffer())
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.writeFileSync(dest, buf)
}

function copyLocalFile(rel, dest) {
  const src = path.join(LOCAL_SRC, rel)
  if (!fs.existsSync(src)) return false
  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)
  return true
}

function copyLocalTreeMerge(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return
  fs.mkdirSync(destDir, { recursive: true })
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name)
    const destPath = path.join(destDir, entry.name)
    if (entry.isDirectory()) {
      copyLocalTreeMerge(srcPath, destPath)
    } else if (!fs.existsSync(destPath)) {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

let ok = 0
let fail = 0

fs.mkdirSync(PUBLIC_IMAGES, { recursive: true })

// SVGs locales que no están en el demo (logo propio)
const localOnly = ['logo/logo-sg.svg']
for (const rel of localOnly) {
  const dest = path.join(PUBLIC_IMAGES, rel)
  if (!fs.existsSync(dest) && copyLocalFile(rel, dest)) {
    console.log(`✓ local ${rel}`)
  }
}

for (const rel of PATHS) {
  const dest = path.join(PUBLIC_IMAGES, rel)
  if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
    ok++
    continue
  }
  try {
    await download(`${LIVE_BASE}/${rel}`, dest)
    ok++
    console.log(`✓ ${rel}`)
  } catch (e) {
    if (copyLocalFile(rel, dest)) {
      ok++
      console.log(`✓ local fallback ${rel}`)
    } else {
      fail++
      console.warn(`✗ ${rel}: ${e.message}`)
    }
  }
}

// Complementar SVGs locales sin borrar JPGs descargados
copyLocalTreeMerge(LOCAL_SRC, PUBLIC_IMAGES)

console.log(`Listo: ${ok} archivos OK, ${fail} fallos`)
