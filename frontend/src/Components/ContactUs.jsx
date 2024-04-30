import { useRef, useState } from "react";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import FormError from "./FormError";
import Loader from "../Components/Loader";

export default function ContactUs() {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const sendEmail = async (options) => {
        try {
            await emailjs.send("service_6n140gg", "template_xwh5ya6", options, {
                publicKey: "d0nE3plItEgjMB9KV",
            });
            toast.success("Email Sent Successfully");
        } catch (error) {
            toast.error(error);
        }
    };

    if (isLoading)
        return (
            <div className=" absolute inset-0 bg-black h-full flex items-center justify-center">
                <Loader />
            </div>
        );

    return (
        <section className="py-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-[#444]">
                Contact Us
            </h2>
            <form
                action=""
                ref={form}
                onSubmit={handleSubmit(sendEmail)}
                className="flex flex-col md:flex-row"
            >
                <div className=" flex-1 self-center flex flex-col pe-6 gap-y-3">
                    <p className=" text-base text-[#444] ">
                        Hey there! 🚀 Ready to take the next step? Drop us a
                        line! Whether you have questions, ideas, or just want to
                        say hello, {"we're"} all ears. Fill out the form below,
                        and {"let's"} start a conversation that could lead to
                        something amazing. Your thoughts matter to us, and we
                        {" can't"} wait to hear from you! 📝💬
                    </p>
                    <div className=" flex md:flex-row flex-col gap-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="border px-2 py-4 flex-1 rounded-sm"
                            name="from_name"
                            {...register("FirstName", {
                                required: "First Name is required",
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: "Name should contain only letters",
                                },
                            })}
                        />
                        <FormError errorMessage={errors?.FirstName?.message} />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border px-2 py-4 flex-1 rounded-sm"
                            {...register("lastName", {
                                required: "Last Name is required",
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: "Name should contain only letters",
                                },
                            })}
                        />
                        <FormError errorMessage={errors?.lastName?.message} />
                    </div>
                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="border px-2 py-4 flex-1 rounded-sm"
                        name="from_name"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email",
                            },
                        })}
                    />
                    <FormError errorMessage={errors?.email?.message} />
                    <textarea
                        placeholder="Write your queries here"
                        className=" border px-2 py-4 flex-1 rounded-sm"
                        name="message"
                        {...register("message", {
                            required: "message is required",
                        })}
                    />
                    <button
                        onClick={handleSubmit(sendEmail)}
                        className=" me-auto"
                    >
                        <Button text={"Submit"} />
                    </button>
                </div>
                <div className=" flex-1">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-5795988-4849052.png?f=webp"
                        alt=""
                        className=" w-10/12 block m-auto"
                    />
                </div>
            </form>
        </section>
    );
}
