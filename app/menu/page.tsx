import Image from "next/image";

export default function MenuPage() {
  

  return (
  <main
  id="menu"
  className="relative min-h-screen text-black font-[Noto_Serif_JP] overflow-hidden"
  style={{
    backgroundImage:
      typeof window !== "undefined" && window.innerWidth < 768
        ? "url('/background-menu-mobile.png')" // mobile
        : "url('/background-menu.png')", // desktop
    backgroundColor: "#FAF7F2",
    backgroundSize: "auto",
    backgroundRepeat: "repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center top",
  }}
>


    {/* Fond animé motifs japonais */}
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-5 h-5 bg-[url('/motif-japonais.png')] bg-contain bg-no-repeat opacity-30 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${15 + Math.random() * 10}s`,
            filter: 'brightness(1.2) sepia(1) hue-rotate(25deg) saturate(4)',
            transform: `scale(${0.5 + Math.random() * 0.8})`,
          }}
        ></div>
      ))}
    </div>

    {/* Contenu du site au-dessus */}
    <div className="relative z-10">
      {/* ton contenu actuel ici */}

    </div>

    {/* Contenu au-dessus */}
    <div className="relative z-10">
      {/* ton contenu actuel ici */}


    </div>

    {/* Contenu du site au-dessus */}
    <div className="relative z-10">
      {/* ton contenu actuel ici */}

</div>

  {/* Contenu du site au-dessus */}
  <div className="relative z-10">
    {/* ton contenu actuel ici */}
  </div>


      {/* --- Section Plateaux --- */}
      <section id="plateaux" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
          Plateaux & Menus
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Menu Sachi */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-sachi.jpg"
              alt="Menu Sachi"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Menu Sachi (22 pcs)</h3>
            <p className="text-gray-600 mt-2">
              2 Nigiri saumon • 2 Nigiri thon • 2 Nigiri crevette • 8 Maki California saumon-avocat • 8 Spring Roll poulet-mangue
            </p>
            <p className="mt-2 font-bold">19,90 €</p>
          </div>

          {/* Menu Kyoto */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-kyoto.jpg"
              alt="Menu Kyoto"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Menu Kyoto (37 pcs)</h3>
            <p className="text-gray-600 mt-2">
              1 Ikura Flower • 2 Nigiri thon • 2 Nigiri saumon • 4 Maki saumon • 4 Maki concombre • 4 Spicy Cali Roll • 4 Crunch Cali Roll • 8 Maki Cali saumon avocat • 8 Spring Roll thonmayo concombre
            </p>
            <p className="mt-2 font-bold">29,00 €</p>
          </div>

          {/* Plateau Haluka */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/plateau-haluka.jpg"
              alt="Plateau Haluka"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Plateau Haluka (42 pcs)</h3>
            <p className="text-gray-600 mt-2">
              2 Nigiri saumon • 2 Nigiri thon • 2 Nigiri crevette • 2 Nigiri omelette • 8 Maki Cali saumon fromage • 8 Spring Roll poulet mangue • 9 Spicy California Roll • 9 Crunch California Roll
            </p>
            <p className="mt-2 font-bold">36,00 €</p>
          </div>

          {/* Plateau Nagoya */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/plateau-nagoya.jpg"
              alt="Plateau Nagoya"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Plateau Nagoya (75 pcs)</h3>
            <p className="text-gray-600 mt-2">
              1 Ikura Flower • 6 Maki avocat • 6 Maki concombre • 6 Maki fromage • 12 Maki saumon • 12 Maki thon • 8 Maki Cali saumon avocat • 8 Maki Cali thonmayo concombre • 8 Spring Roll saumon avocat • 8 Spring Roll thonmayo concombre
            </p>
            <p className="mt-2 font-bold">44,00 €</p>
          </div>

          {/* Plateau Tokyo */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/plateau-tokyo.jpg"
              alt="Plateau Tokyo"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Plateau Tokyo (56 pcs)</h3>
            <p className="text-gray-600 mt-2">
              3 Ikura Flower • 9 Sashimi saumon • 6 Sashimi thon • 6 Nigiri saumon • 4 Nigiri crevette • 4 Nigiri thon • 8 Maki saumon • 8 Maki thon • 8 Maki Cali saumon avocat
            </p>
            <p className="mt-2 font-bold">53,00 €</p>
          </div>

          {/* Plateau Osaka */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/plateau-osaka.jpg"
              alt="Plateau Osaka"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Plateau Osaka (67 pcs)</h3>
            <p className="text-gray-600 mt-2">
              3 Ikura Flower • 8 Nigiri saumon • 4 Nigiri crevette • 6 Nigiri thon • 6 Nigiri dorade • 8 Maki saumon • 8 Maki concombre • 8 Maki thon • 8 Maki Cali saumon avocat • 8 Spring Roll saumon avocat
            </p>
            <p className="mt-2 font-bold">66,00 €</p>
          </div>

          {/* Plateau Fuji */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/plateau-fuji.jpg"
              alt="Plateau Fuji"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Plateau Fuji (70 pcs)</h3>
            <p className="text-gray-600 mt-2">
              7 Nigiri thon • 7 Nigiri saumon • 8 Maki thon • 8 Maki saumon • 8 Crunch Thon Roll • 8 Crunch Saumon Roll • 16 Maki Cali saumon avocat • 8 Spring Roll saumon avocat
            </p>
            <p className="mt-2 font-bold">68,00 €</p>
          </div>

          {/* Menu Crevette */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-crevette.jpg"
              alt="Menu Crevette"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Menu Crevette (28 pcs)</h3>
            <p className="text-gray-600 mt-2">
              4 Nigiri crevette • 8 Maki crevette • 8 Maki California crevette • 8 Spring Roll crevette
            </p>
            <p className="mt-2 font-bold">25,90 €</p>
          </div>

          {/* Menus M1–M10 */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m1.jpg"
              alt="Menu M1"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M1 (11 pcs)</h3>
            <p className="text-gray-600 mt-2">
              3 Nigiri saumon • 4 Crunch Cali Roll • 4 Spicy Cali Roll
            </p>
            <p className="mt-2 font-bold">10,80 €</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m2.jpg"
              alt="Menu M2"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M2 (16 pcs)</h3>
            <p className="text-gray-600 mt-2">
              4 Nigiri thon • 4 Nigiri saumon • 8 Maki Cali saumon avocat
            </p>
            <p className="mt-2 font-bold">15,90 €</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m3.jpg"
              alt="Menu M3"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M3 (24 pcs)</h3>
            <p className="text-gray-600 mt-2">
              8 Spring Roll surimi avocat • 8 Classic Veggie Cali Roll • 8 Spring Roll saumon avocat
            </p>
            <p className="mt-2 font-bold">15,20 €</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m4.jpg"
              alt="Menu M4"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M4 (20 pcs)</h3>
            <p className="text-gray-600 mt-2">
              4 Nigiri mix • 8 Maki saumon • 8 Crunch Cali Roll
            </p>
            <p className="mt-2 font-bold">16,80 €</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m5.jpg"
              alt="Menu M5"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M5 (21 pcs)</h3>
            <p className="text-gray-600 mt-2">
              2 Nigiri saumon • 3 Sashimi saumon • 4 Maki avocat • 4 Crunch Cali Roll • 4 Spicy Cali Roll • 4 Maki Cali saumon avocat
            </p>
            <p className="mt-2 font-bold">18,90 €</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m6.jpg"
              alt="Menu M6"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M6 (28 pcs)</h3>
            <p className="text-gray-600 mt-2">
              4 Nigiri saumon • 8 Maki saumon • 8 Maki Cali saumon avocat • 8 Spring Roll saumon avocat
            </p>
            <p className="mt-2 font-bold">21,40 €</p>
          </div>
          {/* Menu M7 */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m7.jpg"
              alt="Menu M7"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M7 (32 pcs)</h3>
            <p className="text-gray-600 mt-2">
              8 Maki Cali thon avocat • 8 Maki Cali poulet avocat • 8 Maki Cali saumon avocat • 8 Maki Cali thonmayo concombre
            </p>
            <p className="mt-2 font-bold">22,80 €</p>
          </div>

          {/* Menu M8 */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m8.jpg"
              alt="Menu M8"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M8 (32 pcs)</h3>
            <p className="text-gray-600 mt-2">
              4 Nigiri thon • 4 Nigiri saumon • 8 Maki surimi • 8 Maki Cali saumon avocat • 8 Spring Roll thonmayo concombre
            </p>
            <p className="mt-2 font-bold">25,90 €</p>
          </div>

          {/* Menu M9 */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m9.jpg"
              alt="Menu M9"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M9 (33 pcs)</h3>
            <p className="text-gray-600 mt-2">
              8 Saumon Roll’n Fromage • 8 Spring Roll saumon avocat • 8 Maki Cali saumon avocat • 9 Crunch Saumon Roll
            </p>
            <p className="mt-2 font-bold">28,50 €</p>
          </div>

          {/* Menu M10 */}
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/menu-m10.jpg"
              alt="Menu M10"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">M10 (40 pcs)</h3>
            <p className="text-gray-600 mt-2">
              4 Crunch Poulet Roll • 4 Spicy Poulet Roll • 8 Maki saumon • 8 Maki avocat • 8 Maki concombre • 8 Spring Roll saumon avocat
            </p>
            <p className="mt-2 font-bold">25,80 €</p>
          </div>
        </div>
      </section>

      {/* --- Section Sashimi --- */}
<section id="sashimi" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-4 text-center">
    Sashimi
  </h2>
  <p className="text-center text-gray-700 text-lg font-medium mb-10">
    Servis par 7 pièces
  </p>

  <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto">
    {/* Sashimi Saumon */}
    <div className="bg-white rounded-2xl shadow p-6 w-80 text-center">
      <Image
        src="/menu/sashimi-saumon.jpg"
        alt="Sashimi Saumon"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-1">D1 – Sashimi Saumon</h3>
      <p className="text-gray-600 mb-2">7 tranches de saumon frais</p>
      <p className="text-black font-semibold">8,60 €</p>
    </div>

    {/* Sashimi Thon */}
    <div className="bg-white rounded-2xl shadow p-6 w-80 text-center">
      <Image
        src="/menu/sashimi-thon.jpg"
        alt="Sashimi Thon"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-1">D2 – Sashimi Thon</h3>
      <p className="text-gray-600 mb-2">7 tranches de thon rouge</p>
      <p className="text-black font-semibold">8,90 €</p>
    </div>
  </div>
</section>


      {/* --- Section Chirashi --- */}
      <section id="chirashi" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">Chirashi</h2>
        <p className="text-center text-gray-600 mb-8">Servis dans un bol</p>
        <div className="flex justify-center mb-10">
  <Image
    src="/menu/chirashi-bol.jpg" // remplace par ton image
    alt="Illustration Chirashi"
    width={400}
    height={300}
    className="rounded-2xl shadow-lg object-cover"
  />
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-xl font-semibold">I1 – Tranches de Saumon Avocat</h3>
            <p className="text-gray-600 mt-2">Riz vinaigré garni de saumon et avocat</p>
            <p className="mt-2 font-bold">15,00 €</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-xl font-semibold">I2 – Tranches de Thon Avocat</h3>
            <p className="text-gray-600 mt-2">Riz vinaigré, tranches de thon et avocat</p>
            <p className="mt-2 font-bold">15,00 €</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-xl font-semibold">I3 – Tranches Saumon Thon Avocat</h3>
            <p className="text-gray-600 mt-2">Mélange saumon-thon sur riz vinaigré</p>
            <p className="mt-2 font-bold">15,00 €</p>
          </div>
        </div>
      </section>
      {/* --- Section Maki California --- */}
      <section id="maki-california" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
          Maki California
        </h2>
        <p className="text-center text-gray-600 mb-8">Servis par 8 pièces
        </p>
        {/* Deux images centrées */}
  <div className="flex justify-center gap-6 mb-10 flex-wrap">
    <Image
      src="/menu/maki-california-1.jpg"
      alt="Assortiment Maki California 1"
      width={400}
      height={300}
      className="rounded-2xl object-cover shadow"
    />
    <Image
      src="/menu/maki-california-2.jpg"
      alt="Assortiment Maki California 2"
      width={400}
      height={300}
      className="rounded-2xl object-cover shadow"
    />
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["E10", "Saumon Fromage", "5,90 €"],
            ["E11", "Saumon Avocat", "5,90 €"],
            ["E12", "Thon Mayo Concombre", "5,90 €"],
            ["E13", "Thon Avocat", "5,90 €"],
            ["E14", "Crevette Avocat", "5,90 €"],
            ["E15", "Ebi Frit Avocat", "5,90 €"],
            ["E16", "Poulet Avocat", "5,90 €"],
            ["E17", "Surimi Avocat", "5,90 €"],
            ["E18", "Poulet Ananas", "5,90 €"],
            ["E21", "Saumon Mangue", "5,90 €"],
            ["E22", "Thon Mayo Mangue", "5,90 €"],
            ["E23", "Thon Mangue", "5,90 €"],
            ["E24", "Crevette Mangue", "5,90 €"],
            ["E25", "Ebi Frit Mangue", "5,90 €"],
            ["E26", "Poulet Mangue", "5,90 €"],
            ["E27", "Surimi Mangue", "5,90 €"],
          ].map(([code, label, price]) => (
            <div key={code} className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold">
                {code} – {label}
              </h3>
              <p className="mt-2 font-bold">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section California Roll --- */}
      <section id="california-roll" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
          California Roll
        </h2>
        <p className="text-center text-gray-600 mb-8">Servis par 9 pièces
        </p>
        {/* Image centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/california-roll.jpg"
      alt="Assortiment California Roll"
      width={500}
      height={350}
      className="rounded-2xl object-cover shadow-lg"
    />
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["F1", "Classic California Roll (surimi, concombre, avocat)", "6,90 €"],
            ["F2", "Spicy California Roll", "7,60 €"],
            ["F3", "Crunch California Roll", "7,60 €"],
            ["F4", "Fromage California Roll", "7,60 €"],
            ["F5", "Wagame California Roll", "7,60 €"],
            ["F8", "California Roll au Saumon", "8,90 €"],
            ["F9", "California Roll au Thon", "8,90 €"],
            ["F10", "California Roll aux Crevettes", "9,30 €"],
            ["F11", "California Roll au Poulet", "8,80 €"],
            ["F12", "California Roll au Thon Mayo", "8,80 €"],
            ["F13", "California Roll aux Ebi Frits", "9,50 €"],
          ].map(([code, label, price]) => (
            <div key={code} className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold">
                {code} – {label}
              </h3>
              <p className="mt-2 font-bold">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section Spring Roll --- */}
      <section id="spring-roll" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
          Spring Roll
        </h2>
        <p className="text-center text-gray-600 mb-8">Servis par 8 pièces
        </p>
        {/* Image centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/spring-roll.jpg"
      alt="Assortiment Spring Roll"
      width={500}
      height={350}
      className="rounded-2xl object-cover shadow-lg"
    />
  </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "H1 Saumon Avocat",
            "H2 Thon Avocat",
            "H3 Ebi Frit",
            "H4 Crevette Avocat",
            "H5 Surimi Avocat",
            "H6 Thon Mayo Concombre",
            "H8 Poulet Avocat",
            "H9 Saumon Mangue",
            "H10 Thon Mangue",
            "H11 Ebi Frit Mangue",
            "H12 Crevette Mangue",
            "H13 Poulet Mangue",
            "H14 Surimi Mangue",
            "H15 Poulet Ananas",
            "H16 Saumon Fromage",
          ].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-2 font-bold">6,60 €</p>
            </div>
          ))}
        </div>
      </section>

     {/* --- Section Special Roll --- */}
<section id="special-roll" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-8 text-center">
    Special Rolls
  </h2>

  <div className="flex justify-center gap-10 flex-wrap max-w-5xl mx-auto">
    {/* G1 */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <Image
        src="/menu/special-roll-g1.jpg"
        alt="Rainbow Mix"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">G1 – Rainbow Mix (8 pcs)</h3>
      <p className="text-gray-600 mt-2">(Saumon, thon, avocat, concombre)</p>
      <p className="mt-2 font-bold">13,50 €</p>
    </div>

    {/* G3 */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <Image
        src="/menu/special-roll-g3.jpg"
        alt="Saumon Roll’n Fromage"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">G3 – Saumon Roll’n Fromage (9 pcs)</h3>
      <p className="text-gray-600 mt-2">(Saumon, fromage, riz)</p>
      <p className="mt-2 font-bold">13,80 €</p>
    </div>
  </div>
</section>

      {/* --- Section Combinaisons --- */}
<section id="combinaison" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
    Combinaisons
  </h2>

  <div className="flex justify-center flex-wrap gap-10 max-w-6xl mx-auto">
    {/* Combo A */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <Image
        src="/menu/combo-a.jpg"
        alt="Combo A"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Combo A</h3>
      <p className="text-gray-600 mt-2">
        3 Spicy Cali Surimi • 3 Crunch Cali Surimi • 3 Fromage Cali Surimi
      </p>
      <p className="mt-2 font-bold">8,50 €</p>
    </div>

    {/* Combo B */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <Image
        src="/menu/combo-b.jpg"
        alt="Combo B"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Combo B</h3>
      <p className="text-gray-600 mt-2">
        8 Maki Saumon • 2 Crunch Cali • 2 Nigiri Saumon
      </p>
      <p className="mt-2 font-bold">8,90 €</p>
    </div>

    {/* Combo C */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <Image
        src="/menu/combo-c.jpg"
        alt="Combo C"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Combo C</h3>
      <p className="text-gray-600 mt-2">
        3 Maki Cali Saumon Avocat • 2 Nigiri Saumon • 2 Nigiri Thon • 2 Nigiri Crevette
      </p>
      <p className="mt-2 font-bold">11,40 €</p>
    </div>

    {/* Combo D */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <Image
        src="/menu/combo-d.jpg"
        alt="Combo D"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Combo D</h3>
      <p className="text-gray-600 mt-2">
        3 Spring Cali Saumon • 3 Crunch Cali Saumon • 3 Fromage Cali Saumon
      </p>
      <p className="mt-2 font-bold">9,50 €</p>
    </div>
  </div>
</section>


      {/* --- Section Menu Végétarien --- */}
<section id="menu-vegetarien" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">
    Menu Végétarien
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Nigiri Veggie */}
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <Image
        src="/menu/veggie-nigiri.jpg"
        alt="Nigiri Veggie"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Nigiri Veggie</h3>
      <p className="text-gray-600 mt-2">
        Inari / Avocat / Omelette / Mangue – 1,70 €/pièce
      </p>
    </div>

    {/* Temaki Veggie */}
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <Image
        src="/menu/veggie-temaki.jpg"
        alt="Temaki Veggie"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Temaki Veggie</h3>
      <p className="text-gray-600 mt-2">
        Concombre-Avocat-Fromage / Concombre-Mangue-Fromage – 5,30 €/pièce
      </p>
    </div>

    {/* Maki Veggie */}
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <Image
        src="/menu/veggie-maki.jpg"
        alt="Maki Veggie"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Maki Veggie (8 pcs)</h3>
      <p className="text-gray-600 mt-2">
        Concombre / Avocat / Mangue / Fromage / Omelette – 4,60 €
      </p>
    </div>

    {/* Maki California Veggie */}
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <Image
        src="/menu/veggie-california.jpg"
        alt="Maki California Veggie"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Maki California Veggie (8 pcs)</h3>
      <p className="text-gray-600 mt-2">
        Concombre-Fromage / Avocat-Fromage / Concombre-Avocat-Carotte – 5,30 €
      </p>
    </div>

    {/* Futomaki Veggie */}
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <Image
        src="/menu/veggie-futomaki.jpg"
        alt="Futomaki Veggie"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Futomaki Veggie (4 pcs)</h3>
      <p className="text-gray-600 mt-2">
        Concombre • Avocat • Mangue • Radis Jaune • Carotte • Omelette – 7,50 €
      </p>
    </div>

    {/* Spring Roll Veggie */}
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <Image
        src="/menu/veggie-spring.jpg"
        alt="Spring Roll Veggie"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Spring Roll Veggie (8 pcs)</h3>
      <p className="text-gray-600 mt-2">
        Concombre-Fromage / Avocat-Fromage / Concombre-Carotte-Avocat – 6,10 €
      </p>
    </div>

    {/* California Veggie Roll */}
    <div className="bg-white rounded-2xl shadow p-5 text-center">
      <Image
        src="/menu/veggie-roll.jpg"
        alt="California Veggie Roll"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">California Veggie Roll (9 pcs)</h3>
      <p className="text-gray-600 mt-2">
        Classic 6,90 € – Crunch/Spicy/Fromage/Wagame 7,50 €
      </p>
    </div>

        {/* Menu Vert */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center mx-auto">
      <Image
        src="/menu/veggie-vert.jpg"
        alt="Menu Vert"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Menu Vert (11 pcs)</h3>
      <p className="text-gray-600 mt-2">3 Nigiri Avocat • 8 Maki Concombre</p>
      <p className="mt-2 font-bold">7,80 €</p>
    </div>

    {/* Menu Crunch */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center mx-auto">
      <Image
        src="/menu/veggie-crunch.jpg"
        alt="Menu Crunch"
        width={400}
        height={300}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Menu Crunch (19 pcs)</h3>
      <p className="text-gray-600 mt-2">
        2 Nigiri Omelette • 8 Maki Cali Avocat Fromage • 9 Crunch Cali Roll Veggie
      </p>
      <p className="mt-2 font-bold">14,50 €</p>
    </div>
  </div>

  {/* Menu Veggie Mix centré */}
  <div className="flex justify-center mt-12">
    <div className="bg-white rounded-2xl shadow p-5 w-96 text-center">
      <Image
        src="/menu/veggie-mix.jpg"
        alt="Menu Veggie Mix"
        width={450}
        height={330}
        className="rounded-xl mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold">Menu Veggie Mix (28 pcs)</h3>
      <p className="text-gray-600 mt-2">
        4 Nigiri (Avocat / Mangue / Radis Jaune / Omelette) • 4 Crunch Cali Veggie •
        4 Spicy Cali Veggie • 8 Spring Roll Mangue Fromage • 8 Maki Cali Concombre-Avocat
      </p>
      <p className="mt-2 font-bold">22,50 €</p>
    </div>
  </div>
</section>



      {/* --- Section Nigiri --- */}
<section id="nigiri" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Nigiri
  </h2>

  {/* Image horizontale centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/nigiri.jpg"
      alt="Assortiment Nigiri"
      width={900}   // largeur augmentée
      height={300}  // hauteur réduite pour un rendu horizontal
      className="rounded-2xl object-cover shadow-lg"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      ["A1", "Saumon", "2,10 €"],
      ["A2", "Thon", "2,10 €"],
      ["A3", "Saumon Avocat", "2,70 €"],
      ["A4", "Crevette", "2,10 €"],
      ["A6", "Dorade", "2,70 €"],
      ["A7", "Anguille", "3,10 €"],
    ].map(([code, label, price]) => (
      <div key={code} className="bg-white rounded-2xl shadow p-5">
        <h3 className="text-xl font-semibold">
          {code} – {label}
        </h3>
        <p className="mt-2 font-bold">{price}</p>
      </div>
    ))}
  </div>
</section>


      {/* --- Section Gunkan --- */}
<section id="gunkan" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Gunkan
  </h2>

  {/* Image horizontale centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/gunkan.jpg"
      alt="Assortiment Gunkan"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
    {/* Ligne 1 */}
    <div className="bg-white rounded-2xl shadow p-5 w-64 text-center">
      <h3 className="text-xl font-semibold">B1 – Ikura Nori</h3>
      <p className="mt-2 font-bold">3,10 € / pièce</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-64 text-center">
      <h3 className="text-xl font-semibold">B2 – Ikura Flower</h3>
      <p className="mt-2 font-bold">3,10 € / pièce</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-64 text-center">
      <h3 className="text-xl font-semibold">B3 – Masago Nori</h3>
      <p className="mt-2 font-bold">3,10 € / pièce</p>
    </div>

    {/* Ligne 2 : B4 sous B2 */}
    <div className="hidden lg:block"></div>
    <div className="bg-white rounded-2xl shadow p-5 w-64 text-center">
      <h3 className="text-xl font-semibold">B4 – Masago Flower</h3>
      <p className="mt-2 font-bold">3,10 € / pièce</p>
    </div>
    <div className="hidden lg:block"></div>
  </div>
</section>



      {/* --- Section Temaki --- */}
<section id="temaki" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Temaki
  </h2>

  {/* Image horizontale centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/temaki.jpg" // ajoute ton image ici
      alt="Assortiment Temaki"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">C1 – Saumon Avocat Concombre</h3>
      <p className="mt-2 font-bold">5,60 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">C2 – Thon Avocat Concombre</h3>
      <p className="mt-2 font-bold">5,70 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">C3 – Crevette Avocat Concombre</h3>
      <p className="mt-2 font-bold">5,90 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">C4 – Ebi Frit Avocat Concombre</h3>
      <p className="mt-2 font-bold">5,90 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">C5 – Surimi Avocat Concombre</h3>
      <p className="mt-2 font-bold">5,50 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">C6 – Thon Mayo Avocat Concombre</h3>
      <p className="mt-2 font-bold">5,50 €</p>
    </div>

    {/* C8 centré sous C5 */}
    <div className="hidden lg:block"></div>
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">C8 – Poulet Avocat Concombre</h3>
      <p className="mt-2 font-bold">5,60 €</p>
    </div>
    <div className="hidden lg:block"></div>
  </div>
</section>

      {/* --- Section Maki --- */}
<section id="maki" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Maki
  </h2>
  <p className="text-center text-gray-600 mb-8">Servis par 8 pièces</p>

  {/* Image horizontale centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/maki.jpg" // Remplace par ton image
      alt="Assortiment Maki"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto justify-items-center">
    <div className="bg-white rounded-2xl shadow p-5 w-72 text-center">
      <h3 className="text-xl font-semibold">E3 – Surimi</h3>
      <p className="mt-2 font-bold">5,50 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-72 text-center">
      <h3 className="text-xl font-semibold">E7 – Thon</h3>
      <p className="mt-2 font-bold">5,50 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-72 text-center">
      <h3 className="text-xl font-semibold">E9 – Crevette</h3>
      <p className="mt-2 font-bold">5,50 €</p>
    </div>
  </div>
</section>


      {/* --- Section Futo Maki --- */}
<section id="futomaki" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-4 text-center">
    Futo Maki
  </h2>
  <p className="text-center text-gray-600 mb-8">Servis par 4 pièces</p>

  {/* Image horizontale centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/futomaki.jpg" // remplace par ton image
      alt="Assortiment Futo Maki"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Futo Saumon</h3>
      <p className="text-gray-600">Concombre • Mangue • Avocat • Carotte • Radis jaune</p>
      <p className="mt-2 font-bold">8,30 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Futo Thon</h3>
      <p className="text-gray-600">Concombre • Mangue • Avocat • Carotte • Radis jaune</p>
      <p className="mt-2 font-bold">8,30 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Futo Poulet</h3>
      <p className="text-gray-600">Concombre • Mangue • Avocat • Carotte • Radis jaune</p>
      <p className="mt-2 font-bold">8,30 €</p>
    </div>

    {/* Futo Crevette sous Futo Thon */}
    <div className="hidden lg:block"></div>
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Futo Crevette</h3>
      <p className="text-gray-600">Concombre • Mangue • Avocat • Carotte • Radis jaune</p>
      <p className="mt-2 font-bold">8,30 €</p>
    </div>
    <div className="hidden lg:block"></div>
  </div>
</section>


      {/* --- Section Suppléments --- */}
<section id="supplements" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Suppléments
  </h2>

  {/* Image horizontale centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/supplements.jpg"
      alt="Suppléments"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  {/* Grille responsive */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
    {/* Ligne 1 */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Riz blanc chaud
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">2,50 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Riz vinaigré
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">3,50 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Edamame
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">4,50 €</p>
    </div>

    {/* Ligne 2 */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Wakame
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">4,50 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Soupe miso
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">3,50 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Loempia végétarien (6 pcs)
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">4,40 €</p>
    </div>

    {/* Ligne 3 */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Triangles au curry frits (6 pcs)
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">4,40 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Nems (porc / poulet – 4 pcs)</h3>
      <p className="mt-2 font-bold">4,60 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Raviolis japonais poulet (7 pcs)</h3>
      <p className="mt-2 font-bold">6,80 €</p>
    </div>

    {/* Ligne 4 */}
    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Raviolis scampis (7 pcs)</h3>
      <p className="mt-2 font-bold">7,20 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
        Raviolis japonais végétarien (7 pcs)
        <Image src="/icons/veggie.png" alt="végétarien" width={20} height={20} />
      </h3>
      <p className="mt-2 font-bold">7,20 €</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 w-80 text-center">
      <h3 className="text-xl font-semibold">Dim sum cantonais (7 pcs)</h3>
      <p className="mt-2 font-bold">7,90 €</p>
    </div>
  </div>
</section>



      {/* --- Section Soft --- */}
      <section id="soft" className="py-16 px-6">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">Softs</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            ["Eau plate / pétillante", "2,00 €"],
            ["Coca-Cola / Coca Zero", "2,00 €"],
            ["Fanta / Sprite", "2,00 €"],
            ["Ice Tea (pétillant, pêche, green)", "2,00 €"],
            ["Thé vert froid (Jasmin / Melon / Litchi)", "2,90 €"],
            ["Ramune japonais (goût au choix – 200 ml)", "3,20 €"],
          ].map(([nom, prix]) => (
            <div key={nom} className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-xl font-semibold">{nom}</h3>
              <p className="mt-2 font-bold">{prix}</p>
            </div>
          ))}
        </div>
      </section>

     {/* --- Section Bières --- */}
<section id="bieres" className="py-16 px-6">
  <h2 className="text-4xl font-bold text-[#B51E1E] mb-6 text-center">
    Bières
  </h2>

  {/* Image horizontale centrée */}
  <div className="flex justify-center mb-10">
    <Image
      src="/menu/bieres.jpg" // remplace par ton image
      alt="Bières japonaises et chinoises"
      width={900}
      height={300}
      className="rounded-2xl object-cover shadow-lg w-full max-w-3xl"
    />
  </div>

  {/* Grille alignée */}
  <div className="flex flex-col items-center gap-6">
    {/* Ligne du haut */}
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-white rounded-2xl shadow p-5 w-96 text-center">
        <h3 className="text-xl font-semibold">Bière Japonaise Asahi</h3>
        <p className="mt-2 font-bold">3,20 €</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5 w-96 text-center">
        <h3 className="text-xl font-semibold">Bière Japonaise Iki (Bio)</h3>
        <p className="mt-2 font-bold">3,80 €</p>
      </div>
    </div>

    {/* Ligne du bas centrée */}
    <div className="bg-white rounded-2xl shadow p-5 w-96 text-center">
      <h3 className="text-xl font-semibold">Bière Chinoise Tsing Tao</h3>
      <p className="mt-2 font-bold">3,20 €</p>
    </div>
  </div>
</section>


      {/* --- Section Desserts --- */}
      <section id="desserts" className="py-16 px-6 mb-16">
        <h2 className="text-4xl font-bold text-[#B51E1E] mb-10 text-center">Desserts</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/mochi.jpg"
              alt="Mochi glacé"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Mochi (2 boules)</h3>
            <p className="text-gray-600 mt-2">Parfums : mangue, coco ou thé vert</p>
            <p className="mt-2 font-bold">4,50 €</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-5">
            <Image
              src="/menu/maki-nutella-banana.jpg"
              alt="Maki Nutella Banana"
              width={600}
              height={400}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">Maki Nutella Banana (8 pcs)</h3>
            <p className="mt-2 font-bold">4,90 €</p>
          </div>
        </div>
      </section>
    </main>
  );
  // Supprimer le fond quand on quitte la page
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", () => {
    const body = document.querySelector("body");
    if (body) body.style.backgroundImage = "";
  });
}

}
