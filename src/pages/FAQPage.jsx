import Accordion from "../homecomponents/Accordion.jsx";
import { FaArrowRight } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { GoHome } from "react-icons/go";


function FaqPage() {
    return (
        <div className="px-[120px] py-[48px]">
            <div className="mb-8 flex items-center  gap-2">
                <GoHome color="#475156" />
                <span className="font-medium text-sm text-[#475156]">Home</span>
                <FaAngleRight color="#475156" />
                <span className="font-medium text-sm text-[#475156]">Pages</span>
                <FaAngleRight color="#475156" />
                <span className="font-medium text-sm text-[#0B5D51]">FAQs</span>
            </div>
            <p className="font-semibold text-[32px] mb-10">Frequently Asked Questions</p>
            <div className="flex gap-10">
                <div>
                    <Accordion title="Fusce molestie condimentum facilisis.">
                        <p className="font-sans leading-6 text-[#475156]">Nulla malesuada iaculis nisi, vitae sagittis
                            lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper
                            gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan
                            dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
                    </Accordion>
                    <Accordion title="Quisque quis nunc quis urna tempor lobortis vel non orci. ">
                        <p className="font-sans leading-6 text-[#475156]">Nulla malesuada iaculis nisi, vitae sagittis
                            lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper
                            gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan
                            dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
                    </Accordion>
                    <Accordion title="Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.">
                        <p className="font-sans leading-6 text-[#475156]">Nulla malesuada iaculis nisi, vitae sagittis
                            lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper
                            gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan
                            dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et
                            malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.</p>
                    </Accordion>
                </div>
                <div className="p-8 border bg-[#FBF4CE] rounded">
                    <p className="mb-2 font-medium text-lg leading-6">Don’t find your answer, Ask for support.</p>
                    <p className="mb-2 leading-6 text-sm text-[#475156]">Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent eget sem
                        purus.</p>
                    <input className="focus:outline-none mt-2 mb-2 p-2 w-full border border-[#F7E99E] rounded-sm" type="text"
                           placeholder="Your email address"/>
                    <input className="focus:outline-none mt-2 mb-2 p-2 w-full border border-[#F7E99E] rounded-sm" type="text"
                           placeholder="Subject"/>
                    <textarea rows="4" cols="50" className="focus:outline-none mt-2 mb-2 p-2 w-full border border-[#F7E99E] rounded-sm"
                              placeholder="Message"></textarea>
                    <button className="flex items-center justify-center gap-2 bg-[#0B5D51] px-[25px] py-[10px] rounded">
                        <span className="text-white">SEND MESSAGE</span>
                        <FaArrowRight color="white"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FaqPage;