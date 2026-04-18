"use client";
import { useEffect, useState } from "react";

function toHikamani(d: Date) {
  const epoch = new Date(2017, 0, 28); // 2017年1月28日 = 元年1月1日
  const msPerDay = 86400000;
  let days = Math.floor((d.getTime() - epoch.getTime()) / msPerDay);

  // 1年 = 365日（うるう年は366日）として年を計算
  let year = 1;
  while (true) {
    const isLeap = (y: number) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    const daysInYear = isLeap(2016 + year) ? 366 : 365;
    if (days < daysInYear) break;
    days -= daysInYear;
    year++;
  }

  // 残り日数から月日を計算（元日は1月28日起算）
  const startMonth = 1; // 元日は1月28日
  const startDay = 28;
  const baseDate = new Date(2016 + year, startMonth - 1, startDay);
  baseDate.setDate(baseDate.getDate() + days);

  return {
    year,
    month: baseDate.getMonth() + 1,
    day: baseDate.getDate(),
    hour: d.getHours(),
    min: d.getMinutes(),
    sec: d.getSeconds(),
  };
}

export default function HikamaniClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) return null;

  const { year, month, day, hour, min, sec } = toHikamani(now);
  const pad = (n: number) => String(n).padStart(2, "0");

  // 次の元日（1月28日）までのカウントダウン
  let nextGanjitsu = new Date(now.getFullYear(), 0, 28);
  if (now >= nextGanjitsu) nextGanjitsu = new Date(now.getFullYear() + 1, 0, 28);
  const diff = nextGanjitsu.getTime() - now.getTime();
  const cd = {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
  const nextYear = toHikamani(nextGanjitsu).year;

  // 次の凍結の日（5月11日）までのカウントダウン
  let nextToketsu = new Date(now.getFullYear(), 4, 11);
  if (now >= nextToketsu) nextToketsu = new Date(now.getFullYear() + 1, 4, 11);
  const diffT = nextToketsu.getTime() - now.getTime();
  const cdT = {
    d: Math.floor(diffT / 86400000),
    h: Math.floor((diffT % 86400000) / 3600000),
    m: Math.floor((diffT % 3600000) / 60000),
    s: Math.floor((diffT % 60000) / 1000),
  };
  const nextToketsuYear = toHikamani(nextToketsu).year;

  // 次の光誕祭（4月21日）までのカウントダウン
  let nextKoutan = new Date(now.getFullYear(), 3, 21);
  if (now >= nextKoutan) nextKoutan = new Date(now.getFullYear() + 1, 3, 21);
  const diffK = nextKoutan.getTime() - now.getTime();
  const cdK = {
    d: Math.floor(diffK / 86400000),
    h: Math.floor((diffK % 86400000) / 3600000),
    m: Math.floor((diffK % 3600000) / 60000),
    s: Math.floor((diffK % 60000) / 1000),
  };
  const nextKoutanYear = toHikamani(nextKoutan).year;

  // 次の聖誕祭（7月30日）までのカウントダウン
  let nextSeitan = new Date(now.getFullYear(), 6, 30);
  if (now >= nextSeitan) nextSeitan = new Date(now.getFullYear() + 1, 6, 30);
  const diffS = nextSeitan.getTime() - now.getTime();
  const cdS = {
    d: Math.floor(diffS / 86400000),
    h: Math.floor((diffS % 86400000) / 3600000),
    m: Math.floor((diffS % 3600000) / 60000),
    s: Math.floor((diffS % 60000) / 1000),
  };
  const nextSeitanYear = toHikamani(nextSeitan).year;

  // 次の野獣の日（8月10日）までのカウントダウン
  let nextYaju = new Date(now.getFullYear(), 7, 10);
  if (now >= nextYaju) nextYaju = new Date(now.getFullYear() + 1, 7, 10);
  const diffY = nextYaju.getTime() - now.getTime();
  const cdY = {
    d: Math.floor(diffY / 86400000),
    h: Math.floor((diffY % 86400000) / 3600000),
    m: Math.floor((diffY % 3600000) / 60000),
    s: Math.floor((diffY % 60000) / 1000),
  };
  const nextYajuYear = toHikamani(nextYaju).year;

  return (
    <div className="mt-3 flex flex-col gap-4">
      <p className="text-3xl font-bold text-white tabular-nums">
        {year}年{pad(month)}月{pad(day)}日 {pad(hour)}時{pad(min)}分{pad(sec)}秒
      </p>
      <div>
        <p className="text-xs text-gray-500 mb-1">ヒカマニ暦{nextYear}年 元日まで</p>
        <p className="text-2xl font-bold text-violet-400 tabular-nums">
          {cd.d}日 {pad(cd.h)}時間{pad(cd.m)}分{pad(cd.s)}秒
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">ヒカマニ暦{nextToketsuYear}年 凍結の日まで</p>
        <p className="text-2xl font-bold text-blue-400 tabular-nums">
          {cdT.d}日 {pad(cdT.h)}時間{pad(cdT.m)}分{pad(cdT.s)}秒
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">ヒカマニ暦{nextKoutanYear}年 光誕祭まで（ヒカキン誕生日）</p>
        <p className="text-2xl font-bold text-yellow-400 tabular-nums">
          {cdK.d}日 {pad(cdK.h)}時間{pad(cdK.m)}分{pad(cdK.s)}秒
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">ヒカマニ暦{nextSeitanYear}年 聖誕祭まで（セイキン誕生日）</p>
        <p className="text-2xl font-bold text-green-400 tabular-nums">
          {cdS.d}日 {pad(cdS.h)}時間{pad(cdS.m)}分{pad(cdS.s)}秒
        </p>
      </div>
      <div>
        <p className="text-xs text-gray-500 mb-1">ヒカマニ暦{nextYajuYear}年 野獣の日まで</p>
        <p className="text-2xl font-bold text-orange-400 tabular-nums">
          {cdY.d}日 {pad(cdY.h)}時間{pad(cdY.m)}分{pad(cdY.s)}秒
        </p>
      </div>
    </div>
  );
}
