function ConsultOnline() {
    return (<>
    <section className="bg-[#e7f3f7] py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-[#2b3d67] mb-6 text-center">
          Request a Free Consultation
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#2b3d67] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#17b2aa]"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-[#2b3d67] mb-1">
              Country
            </label>
            <input
              type="text"
              placeholder="Enter your country"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#17b2aa]"
            />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-[#2b3d67] mb-1">
              City
            </label>
            <input
              type="text"
              placeholder="Enter your city"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#17b2aa]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#2b3d67] mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#17b2aa]"
            />
          </div>

          {/* Medical Issue */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-[#2b3d67] mb-1">
              Medical Issue
            </label>
            <textarea
              placeholder="Describe your medical issue"
              rows="3"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#17b2aa]"
            ></textarea>
          </div>

          {/* Patient Age */}
          <div>
            <label className="block text-sm font-medium text-[#2b3d67] mb-1">
              Patient Age
            </label>
            <input
              type="number"
              placeholder="Enter age"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[#17b2aa]"
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#17b2aa] text-white font-semibold py-3 rounded-md hover:bg-[#149089] transition"
            >
              Submit Consultation Request
            </button>
          </div>
        </form>
      </div>
    </section>
    </>)
}

export default ConsultOnline;