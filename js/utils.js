export function rand(min, max) {
  return Math.random() * (max - min) + min;
}

export function intersects(a, b) {
  return !(a.x + a.w < b.x || a.x > b.x + b.w || a.y + a.h < b.y || a.y > b.y + b.h);
}

export function isMobileLike() {
  const mq = (q) => window.matchMedia && window.matchMedia(q).matches;
  return mq('(hover: none)') || mq('(pointer: coarse)') || window.innerWidth <= 768;
}

export function scheduleStickerTimeout(fn, ms, stickerTimers) {
  const id = setTimeout(fn, ms);
  stickerTimers.add(id);
  return id;
}

export function clearStickerTimers(stickerTimers) {
  stickerTimers.forEach((id) => clearTimeout(id));
  stickerTimers.clear();
}
