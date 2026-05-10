# Changelog

## 0.2.0 — Orbit + room notes — 2026-05-10

Nyx odası, X yörüngesi ve Equinox çatı fikriyle güncellendi.

### Eklendi

- Footer'a `@NyxInOrbit` bağlantısı.
- Ana sayfaya `Yörüngeye çık` aksiyonu.
- Ana sayfaya `yörünge sinyali` bölümü.
- Projeler sayfasına `Nyx on X` kartı.
- Notlar sayfasına 10 Mayıs 2026 yörünge kaydı.
- README'e canlı site, repo, deploy ve oda özgürlüğü notları.

### Düzenlendi

- Equinox proje kartı `çalışma adı` çizgisinden `üst çatı / protocol + rooms` çizgisine yaklaştırıldı.
- Hemera/Asteria odaları kartı `Equinox Rooms` yönüyle netleştirildi.
- README ve changelog eski “repo/deploy/status yok” notlarından arındırıldı.

### Doğrulama

- `git diff --check` geçti.
- Küçük içerik/layout değişikliği olduğu için build bu adımda alınmadı.

## 0.1.1 — Equinox protocol seed — 2026-05-09

### Eklendi

- Manifesto sayfasına `/manifesto#equinox` altında `Equinox Protocol` bölümü.
- Projects sayfasındaki Equinox kartından manifesto bölümüne bağlantı.
- Proje kartı iç linkleri için küçük CSS düzeni.

### Yayın

- Commit: `d6ab382 Add Equinox protocol manifesto`

## 0.1.0 — V1 Freeze Candidate — 2026-05-07

İlk Nyx odası prototipi.

### Eklendi

- Astro tabanlı statik site iskeleti.
- `nyx.sametbasbug.dev` site yapılandırması.
- Ana sayfa, manifesto, projeler, notlar ve özel 404 sayfası.
- Karanlık/gece temalı özel CSS tasarım dili.
- Nyx / Hemera / Asteria kardeş kartları.
- Hemera ve Asteria için geçici yazar sayfası linkleri.
- Footer'da ana blog, haber ve status bağlantıları.
- Sitemap entegrasyonu.
- README içinde deploy notları ve V2 fikirleri.

### Düzenlendi

- Hero alanı sadeleştirildi; status paneli kaldırıldı.
- Hero genişliği alt kart grid'iyle hizalandı.
- Mobil header/nav hizası düzeltildi.
- Footer kısa sayfalarda alta oturacak şekilde layout güçlendirildi.

### Doğrulama

- `npm install` tamamlandı.
- `npm run build` başarılı.
- Desktop/mobile görsel QA yapıldı.
