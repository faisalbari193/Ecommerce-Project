import Container from "../ui/Container";

const sponsors = [
  {
    id: 1,
    name: "Nike",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 2,
    name: "Adidas",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 3,
    name: "Apple",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    id: 4,
    name: "Samsung",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Samsung_wordmark.svg",
  },
  {
    id: 5,
    name: "Sony",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    id: 6,
    name: "Puma",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/puma.svg",
  },
  {
    id: 7,
    name: "Google",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    id: 8,
    name: "Microsoft",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    id: 9,
    name: "Amazon",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    id: 10,
    name: "Intel",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
  },
  {
    id: 11,
    name: "Zara",
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
  },
  {
    id: 12,
    name: "H&M",
    src: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
  },
];

const Sponsors = () => {
  return (
    <section className="mt-20.75">
      <Container>
        <div className="px-12.25">
          <p className="font-custom mb-8 text-center text-[35px] font-normal">
            @UOMO
          </p>
          <div className="grid grid-cols-6 gap-1">
            {sponsors.map((brand) => (
              <div
                key={brand.id}
                className="flex h-24 items-center justify-center bg-[#EBEBEB] transition-colors hover:bg-[#E0E0E0]"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-12 w-20 object-contain opacity-60 grayscale transition-opacity hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Sponsors;
