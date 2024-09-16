import React from 'react'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d88bf767-a664-4eb9-b3ff-b69a43a3e92d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Form submitted successfully!");
      event.target.reset();
    }

  };
  return (
    <div id="Contact" className="pt-24 md:pt-12 p-8 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-4 md:mb-20 uppercase text-teal-300 leading-normal">Contact Me</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input data-aos="flip-up" className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-teal-300 b_glow text-xl text-slate-400"
            placeholder="Enter Your Name" type="text" name="name" />
          <input data-aos="flip-up" className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-teal-300 b_glow text-xl text-slate-400"
            placeholder="Enter Your Email" type="email" name="email" />
        </div>
        <textarea data-aos="flip-down" className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-teal-300 b_glow text-xl text-slate-400"
          placeholder="Enter Your Message Here: " name="message" id="contactMessage" cols="30" rows="10"></textarea>
        <button className="neon-button shadow-2xl hover:shadow-teal-300/50 text-slate-800 border-2 border-slate-800 bg-teal-300 hover:bg-slate-800 
        hover:text-white rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl font-bold mb-10"
          type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
