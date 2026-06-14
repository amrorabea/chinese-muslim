export default function BranchCard({ branch }) {
  return (
    <div
      className="bg-neutral-900/80 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-red-500/20 hover:shadow-lg hover:shadow-red-500/5"
      id={branch.id}
      style={{ scrollMarginTop: "100px" }}
    >
      {/* Map */}
      <iframe
        className="w-full h-56 md:h-64 border-0"
        src={branch.mapUrl}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`El Moslem ${branch.name} Location Map`}
      />

      {/* Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">
          El Moslem — <span className="text-red-500">{branch.name}</span>
        </h3>
        <p className="text-zinc-500 text-sm mb-5">{branch.area}</p>

        <div className="space-y-4 mb-6">
          {/* Address */}
          <div className="flex gap-3">
            <span className="text-lg mt-0.5">📍</span>
            <div>
              <strong className="text-zinc-300 text-sm block mb-0.5">Address</strong>
              <span className="text-zinc-500 text-sm">{branch.address}</span>
            </div>
          </div>

          {/* Hours */}
          <div className="flex gap-3">
            <span className="text-lg mt-0.5">🕐</span>
            <div>
              <strong className="text-zinc-300 text-sm block mb-0.5">Opening Hours</strong>
              <span className="text-zinc-500 text-sm">
                Sun – Thu: 11:00 AM – 11:00 PM<br />
                Fri – Sat: 11:00 AM – 12:00 AM
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-3">
            <span className="text-lg mt-0.5">📞</span>
            <div>
              <strong className="text-zinc-300 text-sm block mb-0.5">Phone</strong>
              <a href={`tel:${branch.phone}`} className="text-amber-400 hover:text-amber-300 text-sm transition-colors">
                {branch.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`tel:${branch.phone}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25 text-sm"
            id={`call-${branch.id}`}
          >
            📞 Call Now
          </a>
          <a
            href={branch.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium rounded-xl transition-all duration-300 text-sm"
            id={`directions-${branch.id}`}
          >
            📍 Directions
          </a>
        </div>
      </div>
    </div>
  );
}
