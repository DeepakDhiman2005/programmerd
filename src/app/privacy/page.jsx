"use client"
import React from "react";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const Privacy = () => {
    const router = useRouter();

    return <>
        <div className="flex justify-center items-center">
            <div className="w-full md:w-3/4 flex justify-start mt-10 p-4 border border-slate-100 shadow-md shadow-slate-200 rounded-md mb-10 items-start flex-col">
                <h2 className="text-slate-800 font-semibold">Privacy Policy</h2>
                <p className="mt-3 mb-3 text-slate-700 text-sm font-semibold">This Privacy Policy describes how Programmer D ("we", "us", or "our") collects, uses, and shares personal information when you visit our website or interact with our YouTube channel (collectively referred to as the "Service").</p>

                <h2 className="text-slate-800 mb-2 font-semibold">1. Information We Collect</h2>
                <p><span className="text-slate-800 font-bold">Personal Information:</span> When you visit our website or interact with our YouTube channel, we may collect certain personal information such as your name, email address, and any other information you voluntarily provide to us.</p>

                <p><span className="text-slate-800 font-bold">Log Data:</span> We may also collect log data, including your IP address, browser type, pages visited, and other statistics about your visit to our website or interactions with our YouTube channel.</p>
                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">2. Use of Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="mt-2 mb-2 ml-3 flex list-disc justify-start items-start flex-col w-3/4">
                    <li>Providing and maintaining the Service;</li>
                    <li>Responding to inquiries or comments you submit to us;</li>
                    <li>Analyzing how the Service is used to improve user experience;</li>
                    <li>Sending you updates, newsletters, or other communications related to our content, only if you have subscribed or opted-in to receive such communications.</li>
                </ul>
                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">3. Sharing of Information</h2>
                <p>We may share your personal information in the following circumstances:</p>
                <ul className="mt-2 mb-2 ml-3 flex list-disc justify-start items-start flex-col w-3/4">
                    <li>With service providers who assist us in operating our website or YouTube channel;</li>
                    <li>When required by law or to respond to legal process;</li>
                    <li>To protect the rights, property, or safety of Programmer D, our users, or others.</li>
                </ul>

                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">4. Cookies and Tracking</h2>
                <p>We use cookies and similar tracking technologies to track the activity on our website and YouTube channel and hold certain information. You have the option to refuse cookies by adjusting your browser settings, but this may affect your ability to access certain features of the Service.</p>

                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">5. Third-Party Links</h2>
                <p>Our website or YouTube channel may contain links to third-party websites or content. We are not responsible for the privacy practices or content of these third parties. We encourage you to review the privacy policies of any third-party websites you visit.</p>

                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">6. Children's Privacy</h2>
                <p>Our Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and become aware that your child has provided us with personal information, please contact us, and we will take steps to remove that information from our systems.</p>

                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">7. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically for any changes.</p>

                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">8. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at instagram (<a href="https://www.instagram.com/deepakdhiman4367/" target="_blank" className="text-purple-700 hover:text-blue-700 no-underline">instagram.com</a>).</p>

                <h2 className="text-slate-800 mt-2 mb-2 font-semibold">9. Advertisements</h2>
                <p>In compliance with Google AdSense policies, we utilize third-party advertising companies to display ads on our website. These companies may employ cookies to collect information about your visits to this and other websites to provide advertisements about products and services tailored to your interests. If you wish to learn more about this practice or opt out of personalized advertising, you can do so by visiting the Ads Settings page or the www.aboutads.info website. It's important to note that if you haven't opted out of third-party ad serving, cookies from other vendors or ad networks may also be used for ad placement. We are committed to transparency, and you have the option to review and manage your ad preferences for a more customized browsing experience.</p>

                <div className="flex justify-start mt-7 items-center">
                    <Button color="green" onClick={() => {
                        router.push("/");
                    }}>Home</Button>
                    <a href="https://www.youtube.com/@ProgrammerD7" className="ml-2" target="_blank">
                        <Button color="red">Youtube</Button>
                    </a>
                </div>
            </div>
        </div>
    </>
}

export default Privacy;