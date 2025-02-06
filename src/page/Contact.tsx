import emailjs from 'emailjs-com';
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import contactUsPic from "@/assets/other/contact-us.jpg"
import { Button } from '@/components/ui/button';
import Footer from '@/components/contactus/other';

const Contact = () => {
    const {
        register,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e : any) => {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_f24tlra', 'template_9kapuey', e.target, 'RN0f5n96xAOQ3lyVE')
            .then(() => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='w-5/6 mx-auto'>
            <section id="contact" className="contact py-48 w-full" style={{ height: "85vh"}}>
                {/* HEADINGS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                    className="flex justify-end w-full"
                >
                    <div>
                        <p className="font-playfair font-semibold text-4xl"><span className="text-yellow">CONTACT ME</span> TO GET STARTED</p>
                        <div className="flex md:justify-end my-5"><LineGradient width="w-1/2" /></div>
                    </div>
                </motion.div>

                {/* FORM & IMAGE */}
                <div className="md:flex md:justify-between gap-16 mt-5">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 flex justify-center"
                    >
                        <img src={contactUsPic} alt="contact" />
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="basis-1/2 mt-10 md:mt-0"
                    >
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
                        method="POST"
                    >
                        <input
                            className="w-full border border-primary border-2 rounded-xl font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {
                            errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}

                        <input
                            className="w-full border border-primary border-2 rounded-xl font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {
                            errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea className="w-full border border-primary border-2 rounded-xl font-semibold placeholder-opaque-black p-3 mt-5"
                            placeholder="MESSAGE"
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,
                                })}
                        />
                        {errors.message && (
                        <p className="text-red mt-1">
                            {errors.message.type === "required" &&
                            "This field is required."}
                            {errors.message.type === "maxLength" &&
                            "Max length is 2000 char."}
                        </p>
                        )}

                        <Button
                            className="p-5 bg-otherDarkBlue font-semibold text-white mt-5 hover:bg-accent transition duration-500"
                            type="submit"
                        >
                            SEND ME A MESSAGE
                        </Button>
                    </form>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
