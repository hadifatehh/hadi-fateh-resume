// عکس‌ها ثابتن، پس با خیال راحت هاردکد می‌کنیم.
// فعلاً از picsum استفاده کردم؛ بعداً فقط src رو با عکس‌های خودتون عوض کن.

export const portfolioCategories = [
  "همه نمونه‌کارها",
  "عروسی و عقد",
  "تبلیغاتی",
  "محصول",
  "مدلینگ",
  "پرتره",
  "بارداری",
  "غذا و رستوران",
];

export const portfolioItems = [
  // MAIN (سه‌تای بالایی شبیه اسکرین‌شات)
  {
    id: "m1",
    category: "عروسی و عقد",
    label: "شهاب و نازلی",
    src: "https://picsum.photos/seed/wed1/900/1200",
    framed: true,
  },
  {
    id: "m2",
    category: "عروسی و عقد",
    label: "طاهره و هومن",
    src: "https://picsum.photos/seed/wed2/900/1200",
    framed: true,
  },
  {
    id: "m3",
    category: "محصول",
    label: "هلیا و روزلان",
    src: "https://picsum.photos/seed/prod1/900/1200",
    framed: true,
  },

  // یک ردیف بعدی (مثل پایین اسکرین‌شات که شروعش دیده می‌شه)
  {
    id: "m4",
    category: "مدلینگ",
    label: "مدلینگ",
    src: "https://picsum.photos/seed/model1/900/700",
    framed: true,
  },
  {
    id: "m5",
    category: "پرتره",
    label: "پرتره",
    src: "https://picsum.photos/seed/port1/900/700",
    framed: true,
  },
  {
    id: "m6",
    category: "محصول",
    label: "محصول",
    src: "https://picsum.photos/seed/prod2/900/700",
    framed: true,
  },

  // SIDE (ستون راست با سه کارت کوچک)
  {
    id: "s1",
    placement: "side",
    category: "عروسی و عقد",
    label: "آزاد و آوا",
    src: "https://picsum.photos/seed/side1/900/500",
    framed: true,
  },
  {
    id: "s2",
    placement: "side",
    category: "محصول",
    label: "محصول",
    src: "https://picsum.photos/seed/side2/900/500",
    framed: true,
  },
  {
    id: "s3",
    placement: "side",
    category: "محصول",
    label: "محصول",
    src: "https://picsum.photos/seed/side3/900/500",
    framed: true,
  },
];
