export default function Contact() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-3 bg-black border border-white/20 rounded" />
        <input type="email" placeholder="Your Email" className="p-3 bg-black border border-white/20 rounded" />
        <textarea placeholder="Your Message" rows={5} className="p-3 bg-black border border-white/20 rounded" />
        <button className="bg-accent text-black py-3 rounded font-semibold">Send Message</button>
      </form>
    </section>
  );
}
