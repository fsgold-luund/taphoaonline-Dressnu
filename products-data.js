/* ==========================================================================
   CƠ SỞ DỮ LIỆU SẢN PHẨM — dùng chung cho trang chủ (landing-page-quan-ao-nam.html)
   và trang chi tiết sản phẩm (san-pham.html).

   Cách thêm / sửa sản phẩm:
   - id       : số thứ tự, dùng trong đường link san-pham.html?id=...  (không trùng nhau)
   - name     : tên hiển thị ngắn gọn (hiện trên trang chủ)
   - fullName : tên đầy đủ (hiện trên trang chi tiết sản phẩm)
   - folder   : đường dẫn thư mục chứa ảnh gốc của sản phẩm đó (trong Taphoaonline/)
   - images   : danh sách tên file ảnh trong thư mục trên (ảnh đầu tiên = ảnh đại diện)
   - buyLink  : link mua hàng (Shopee) — bấm nút "Mua sản phẩm" sẽ mở link này
   - badge    : nhãn nhỏ trên ảnh, để trống "" nếu không cần
   ========================================================================== */
const PRODUCTS = [
  {
    id: 1,
    name: "Đầm Dress Công Chúa Cúp Ngực",
    fullName: "Đầm Dress Công Chúa Dự Tiệc Cúp Ngực Phối Tơ Lưới Choàng Chéo Vai Maxi Dáng Xòe Tiểu Thư Sang Chảnh",
    folder: "Taphoaonline/1. Đầm Dress Công Chúa Dự Tiệc Cúp Ngực Phối Tơ Lưới Choàng Chéo Vai Maxi Dáng Xòe Tiểu Thư Sang Chảnh",
    images: ["vn-11134207-7ra0g-m6fdcnxvz23r0e.webp","vn-11134207-7ra0g-m6fdcqr5tgv53e.webp","vn-11134207-7ra0g-m6fdd8fxz04ne0.webp","vn-11134207-7ra0g-m7ly0o19mt9t72.webp"],
    buyLink: "https://s.shopee.vn/W5Kl0UbBX",
    badge: "Mới"
  },
  {
    id: 2,
    name: "Đầm Dự Tiệc Lavi Store",
    fullName: "Đầm dự tiệc lavi store khoét vai kèm tag đá Bling Dress",
    folder: "Taphoaonline/2. Đầm dự tiệc lavi store khoét vai kèm tag đá Bling Dress",
    images: ["vn-11134207-7ras8-mawag9wtowyf5a.webp","vn-11134207-7ras8-mawagfva9rrs38.webp","vn-11134207-7ras8-mawagfvab6c8a9.webp","vn-11134207-7ras8-mawagfwo6bx31b.webp","vn-11134207-7ras8-mawagfy24atz07.webp"],
    buyLink: "https://s.shopee.vn/2qTFWhbHSi",
    badge: ""
  },
  {
    id: 3,
    name: "Áo Yếm Nova Dáng Bí",
    fullName: "Nova-áo yếm dáng bí nhún eo chun bồng xoè hở lưng kèm biển dáng yếm chất tơ xốp",
    folder: "Taphoaonline/3. Nova-áo yếm dáng bí nhún eo chun bồng xoè hở lưng kèm biển dáng yếm chất tơ xốp",
    images: ["sg-11134201-822z0-mof2cxp8dw5rc0.webp","sg-11134201-823p6-mohx75o380lne2.webp","sg-11134201-823pq-mohx75pqhnntc3.webp","sg-11134201-823pw-mohx75o2eio9bd.webp","sg-11134201-823px-mohx75qbpu6jc7.webp","sg-11134201-823qa-mohx75m39rt5c3.webp","vn-11134207-81ztc-monpzvbyus5nc3.webp","vn-11134207-81ztc-monq0h1sxbf06d.webp","vn-11134207-81ztc-monq0yvi9g5dd9.webp"],
    buyLink: "https://s.shopee.vn/7AcEgV7DzF",
    badge: ""
  },
  {
    id: 4,
    name: "Đầm Maxi TIBU D707",
    fullName: "TIBU - Đầm maxi Hai Dây dáng xòe Tầng phối Ren sang chảnh Hở Lưng đi chơi biển dạo phố D707",
    folder: "Taphoaonline/4. TIBU - Đầm maxi Hai Dây dáng xòe Tầng phối Ren sang chảnh Hở Lưng đi chơi biển dạo phố D707",
    images: ["vn-11134207-81ztc-mky1t2eno6x01b.webp","vn-11134207-81ztc-mky1t2fam4udd4.webp","vn-11134207-81ztc-mky1t2hhs7406e.webp","vn-11134207-81ztc-mky1t2nxwjk32f.webp","vn-11134207-81ztc-mlj7i7fdsiyod7.webp","vn-11134207-81ztc-mlyjqv1lkpolcd.webp","vn-11134207-81ztc-mlyjrc698gsi1a.webp"],
    buyLink: "https://s.shopee.vn/7prvT1rObg",
    badge: ""
  },
  {
    id: 5,
    name: "Váy Myra Lệch Vai",
    fullName: "Váy Myra Thiết Kế Lệch Vai Sang Chảnh Điệu Đà, Đầm Ngắn Mặc Đi Chơi Đi Dự Tiệc Xinh Xắn Lagoo",
    folder: "Taphoaonline/5. Váy Myra Thiết Kế Lệch Vai Sang Chảnh Điệu Đà, Đầm Ngắn Mặc Đi Chơi Đi Dự Tiệc Xinh Xắn Lagoo",
    images: ["vn-11134207-7ras8-mc076esdzujue1.webp","vn-11134207-7ras8-mc076i17aauq67.webp","vn-11134207-7ras8-mc076srpjaeqd7.webp","vn-11134207-7ras8-mc076srpkoz604.webp","vn-11134207-7ras8-mc076ssji2y21d.webp","vn-11134207-7ras8-mc076ssthobu5e.webp"],
    buyLink: "https://s.shopee.vn/9fJZzg1IdN",
    badge: "Mới"
  },
  {
    id: 6,
    name: "Đầm Da Phối Ren Cao Cấp",
    fullName: "Đầm da phối ren cao cấp thanh lịch, đầm dây, đầm sexy cao cấp, đầm ôm dáng cho phụ nữ",
    folder: "Taphoaonline/6. Đầm da phối ren cao cấp thanh lịch, đầm dây, đầm sexy cao cấp, đầm ôm dáng cho phụ nữ",
    images: ["sg-11134201-8257s-mg387iyrsnbh29.webp","sg-11134201-82589-mg387h3erc3w8e.webp","sg-11134201-8258d-mg387glk347f7f.webp","sg-11134201-8258w-mg387g7dlxxn79.webp","sg-11134201-8259t-mg387kkevfuxf8.webp","sg-11134201-825ad-mg387i00o1zg1f.webp","sg-11134201-825aw-mg387hd5vwngfa.webp","sg-11134201-825b5-mg387f9i366h8b.webp"],
    buyLink: "https://s.shopee.vn/AUsgzaAd2W",
    badge: ""
  },
  {
    id: 7,
    name: "Đầm Xẻ Cao Sexy",
    fullName: "Đầm xẻ cao sexy cho nữ, ôm sát, thanh lịch, đầm tank cao eo, đầm bodycon mùa hè, đầm dài mặc trong",
    folder: "Taphoaonline/7. Đầm xẻ cao sexy cho nữ, ôm sát, thanh lịch, đầm tank cao eo, đầm bodycon mùa hè, đầm dài mặc trong",
    images: ["sg-11134201-824g4-mflz4o8sw0ss07.webp","sg-11134201-824gj-mflz4s55fbbf9a.webp","sg-11134201-824gz-mflz4r5s23uz46.webp","sg-11134201-824h6-mflz4t3pn8jseb.webp","sg-11134201-824ho-mflz4w2um9l5df.webp","sg-11134201-824hy-mflz4uzjvymhba.webp"],
    buyLink: "https://s.shopee.vn/9zwQOqL0rV",
    badge: ""
  },
  {
    id: 8,
    name: "Đầm Body Lưới 2 Dây",
    fullName: "Đầm body lưới 2 dây đuôi cá trơn cực sexy, đầm maxi hai dây đi biển, đầm body hai dây, đầm đi biển, đi chơi",
    folder: "Taphoaonline/8. Đầm body lưới 2 dây đuôi cá trơn cực sexy, đầm maxi hai dây đi biển, đầm body hai dây , đầm đi biển, đi chơi",
    images: ["vn-11134207-7ras8-mdr4ywh21y2tbd.webp","vn-11134207-7ras8-mdr4ywh23cn95c.webp","vn-11134207-7ras8-mdr4ywhw0q85ea.webp","vn-11134207-7ras8-mdr4ywhw0qlo5b.webp","vn-11134207-7ras8-mdr4ywhw25640c.webp","vn-11134207-7ras8-mdr4ywi60blxa0.webp","vn-11134207-7ras8-mdr4ywj00ip836.webp","vn-11134207-7ras8-mdr4ywj9ypikd5.webp","vn-11134207-7ras8-mdr4ywja03ph27.webp"],
    buyLink: "https://s.shopee.vn/30mg4D6sy4",
    badge: ""
  },
  {
    id: 9,
    name: "Đầm Ren Đuôi Tôm",
    fullName: "Đầm ren đuôi tôm sexy đi biển, đầm hai dây đi tiệc, đầm đi chơi, đi đám cưới, Đầm ren hai dây khoe body",
    folder: "Taphoaonline/9. Đầm ren đuôi tôm sexy đi biển, đầm hai dây đi tiệc, đầm đi chơi, đi đám cưới, Đầm ren hai dây khoe body",
    images: ["vn-11134207-820l4-mei8gzkuh1j4a7.webp","vn-11134207-820l4-mei8gzlehmv4ec.webp","vn-11134207-820l4-mei8gzljka9ya6.webp","vn-11134207-820l4-mei8gzm6dyx18c.webp","vn-11134207-820l4-mei8gzmqvf2c9a.webp"],
    buyLink: "https://s.shopee.vn/50XkS5D3R8",
    badge: ""
  },
  {
    id: 10,
    name: "Đầm Ren Pháp Bodycon",
    fullName: "Đầm ren Pháp có dây đeo, đầm bodycon đỏ, đầm dạ hội, đầm lưới siêu tiên sexy cho tiệc tùng",
    folder: "Taphoaonline/10. Đầm ren Pháp có dây đeo, đầm bodycon đỏ, đầm dạ hội, đầm lưới siêu tiên sexy cho tiệc tùng",
    images: ["sg-11134201-7rasg-mb7y37cl5ikw5b.jpeg","sg-11134201-7rasy-mb7y35o3m2j5e1.webp","sg-11134201-7ratf-mb7y36154ear4b.webp","sg-11134201-7ratg-mb7y36c8mpnm72.jpeg","sg-11134201-7rau1-mb7y388hutih0e.webp","sg-11134201-7rauj-mb7y36vduqa83d.jpeg","sg-11134201-7rav6-mb7y381k50ep9b.webp","sg-11134201-7ravd-mb7y374jioyx2f.webp","sg-11134201-7ravn-mb7y36i2e6eh4b.webp"],
    buyLink: "https://s.shopee.vn/903tDqs8Wf",
    badge: ""
  }
   {
    id: 11,
    name: "Bikini",
    fullName: "Bikini đi biển",
    folder: "Taphoaonline/11. Bikini Phong cách Sexy, 2 mảnh, Bikini phù hợp với đi biển",
    images: ["Bikini00","Bikini01","Bikini02","Bikini03","Bikini04","Bikini05","Bikini06"],
    buyLink: "https://shopee.vn/product/782213167/46357689788?credential_token=8wEwiDL7Z2a8ZJj6fxb96SzF5LoqSuTaXRimDDVP21&exp_group=rollout&gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAM_NxfHGgeczprZR4Q8tPoOfvwhbtN63JlB369xGJA1mbqBWuW2sVWxQjSJT_xT_mbG0_W5kumedB_GGTjqmNpcGhlcnRleHTEkwAAAAzjrUCST-EbOt0k4-r1mb0PsZ13EjC45v2ldMrJT3IIApNMUG96dzdtx99LDa7y7i_vfyCNFNUK7l-nrj6KL09RhNBc-Ld8nGGvKaUMeG7PrAHDXUyTsxdpSohWlVfWkeefkmZj3EWW0Ub9HB5jdh3ZSBoIr9B_uxdvulS_2boyVWs8ecXbOHXto75EcMg4hA&mmp_pid=an_17326360581&uls_trackid=567qmd8301ka&utm_campaign=id_a0N5eiqhjL&utm_content=----&utm_medium=affiliates&utm_source=an_17326360581&utm_term=fa31kkgxgrwr",
    badge: ""
  }
];

function productImgSrc(p, index){ return p.folder + "/" + p.images[index || 0]; }
