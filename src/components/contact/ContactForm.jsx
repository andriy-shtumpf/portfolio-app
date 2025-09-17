const ContactForm = () => {
    return (
        <form
            action="https://getform.io/f/bllznpjb"
            method="POST"
            className="mt-2 xl:pl-10 2xl:pl-20 reveal-up"
        >
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                <div className="mb-4">
                    <label htmlFor="name" className="label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        placeholder="Your Name"
                        className="text-field"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Your@Email.com"
                        required
                        className="text-field"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="message" className="label">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    required
                    className="text-field resize-y min-h-32 max-h-80"
                ></textarea>
            </div>

            <button
                type="submit"
                className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
