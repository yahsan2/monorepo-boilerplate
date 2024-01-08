export function hexToRgb(hex: string): string {
  // 引数として与えられたHEXが正しい形式であるかチェック
  const validHex = /^#([A-Fa-f0-9]{3}){1,2}$/.test(hex);

  if (!validHex) {
    throw new Error("無効なHEXコードです。");
  }

  // ショート形式の場合(#FFF)をフル形式(#FFFFFF)に変換
  let expandedHex = hex.slice(1);
  if (expandedHex.length === 3) {
    expandedHex = expandedHex
      .split("")
      .map((x) => x + x)
      .join("");
  }

  // RGB値を計算
  const r = parseInt(expandedHex.substring(0, 2), 16);
  const g = parseInt(expandedHex.substring(2, 4), 16);
  const b = parseInt(expandedHex.substring(4, 6), 16);

  return `${r},${g},${b}`;
}
