export default function ResearchFields() {
  const fields = [
    {
      title: "Energy Materials",
      desc: "Next-gen batteries and high-efficiency solar photovoltaics.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnALHpxK8j96K_QpTz84iZSkB1AYM7TyK23RCDPVNAp9lRShZ8j6jZ16pXjp61Rs5fs0oD8qLmwH5q0KDMXhT0ym06OX8iamOEDjD_sXaFVpNf0eItKVs4G-va6VPlUT0eHa09G7HHcVL34J2TtvNPLTEAzghmv7pmYAhwueF4wr07UfTS1Cw2k9t8zVEpHAB83wpYIvQM8qyVQ9NNYY8ChOorb2MxzoD0FIZRrbr5QLBCVkGu4B9u1QocH2AyD3eYvHVFyVt_X2D4"
    },
    {
      title: "Manufacturing",
      desc: "Precision 3D printing and smart materials integration.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNoVd_au9NKSJ9CFxQwWa7pofVEQuSkmu2-Drc6GlYvLjSYj6YQTIw1gCDwDJlEsG1_VKCyXwie-j9ZdHlGMvC-w_CYM5eeCClDZvp0hvOznVc692D6LgQbJCegj9d6LtKoglyfLqQ9fOpQoVJ0XneATM9OwnIl8ioeBqIa5G3QoepvJYdg4rG_ruP5PHNs0wiO41eVnoFQaXvZhXHVutDZb16ywAYA_S2cV6YrDbDv7Bw6GAWcUbOF-CUvTqcowx2OXvr8vdAee8i"
    },
    {
      title: "Semiconductor",
      desc: "Nanofabrication and quantum computing hardware developments.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl1HhKsxg6ztcyuVZerzSz9skeMyaKz-fFbH3HxV6DjSKB4l3B6UjnfxA3SmpylGIRMAO1pHjsz5P7xXhAmi0kPbY3OXORF5SBLrs5hCVWwmsFS-VvTi2Ugt5z2UKBOmPVz3oLK6Lg-1_4vSyFLNn2bahS50cn-etsf5G4wR2Iqntx3lCh2RMyHhhrnX0Z9dqqMvMBdvh_FzY94K736swTt7FEzM0ux7tgQWCKbwXN9jtQ5NRhMcljWerhmTQYkIu3w0WxWAFwkHMR"
    },
    {
      title: "Life Science",
      desc: "Advanced bio-materials and precision drug delivery systems.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDizwYg6Trv9bspwHd5_eeBMfu0DJ8ncsd8nbRKMshVTQtRgtVj8jdEtTEkzfS58mO_jxpgIYKklQX0_jtoEkVRDXiSINB5y8DvaDXHteeBLE3KYhqxmDoP1sRj37_ivJEzSQL2hyn5UOz3WgBYjuGtGFZ8n2cDGmJjm-bwtcKpy6hkRIMKhqy9vNeazRixi9le5dWZysgMdYgM5rMtB97BtK3SAnOmiHN6FJN8MguKZRia46FsjHK7YVXKV0oJidL445EtPlCQvjE_"
    }
  ];

  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Frontier Research Fields</h2>
          <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {fields.map((field, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[4/5] shadow-xl cursor-pointer">
              <div 
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" 
                style={{ backgroundImage: `url("${field.image}")`, backgroundSize: 'cover', backgroundPosition: 'center center' }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-bold text-white">{field.title}</h4>
                <p className="text-sm text-slate-300 mt-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {field.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
