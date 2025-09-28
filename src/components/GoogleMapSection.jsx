export default function GoogleMapSection({
  title = "Find Us",
  subtitle = "Our campus / meetup spot",
  address = "Barishal, Bangladesh",
  lat = 22.7010,
  lng = 90.3535,
  zoom = 15,
}) {
  // Simple embed URL using latitude & longitude
  const src = `https://www.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`;

  return (
    <section className="max-w-7xl my-24 text-[#773d30] px-4 md:px-14 mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Left column - text */}
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold">{title}</h2>
          <p className="text-sm">{subtitle}</p>

          <div className="mt-4 text-sm">
            <p className="font-medium">Address</p>
            <p className="mt-1">{address}</p>
          </div>

          <div className="mt-6 flex gap-3 items-center">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-xl bg-[#8f4a3a] text-white text-sm font-medium hover:bg-[#773d30]"
            >
              Open in Google Maps
            </a>
          </div>

          <p className="mt-4 text-xs">
            Map is embedded using an iframe for quick preview. If the map does not
            load in your environment, open it in Google Maps using the button above.
          </p>
        </div>

        {/* Right column - responsive iframe */}
        <div>
          <div className="relative w-full overflow-hidden rounded-xl shadow-sm" style={{ height: "350px" }}>
            <iframe
              title="google-map"
              src={src}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
