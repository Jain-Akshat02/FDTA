"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CreditCard,
  Smartphone,
  Copy,
  Check,
  Send,
  ArrowLeft,
  Building2,
} from "lucide-react";

const MEMBERSHIP_PLANS = [
  { id: "primary", name: "Primary", price: "2,100" },
  { id: "yearly", name: "Yearly", price: "11,000" },
  { id: "gold", name: "Gold", price: "51,000" },
];

const ACCOUNT_NUMBER = "130100008501";
const UPI_ID = "devokorvin3-1@okaxis";
const WHATSAPP_NUMBER = "918010090563";

type PaymentMethod = "upi" | "account" | null;

type UserInfo = {
  fullName: string;
  phone: string;
  email: string;
  membershipPlan: string;
};

export default function PayNow() {
  const [step, setStep] = useState<1 | 2>(1);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    fullName: "",
    phone: "",
    email: "",
    membershipPlan: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof UserInfo, string>>>(
    {}
  );

  const selectedPlan = MEMBERSHIP_PLANS.find(
    (p) => p.id === userInfo.membershipPlan
  );

  function validateForm(): boolean {
    const newErrors: Partial<Record<keyof UserInfo, string>> = {};

    if (!userInfo.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    if (!userInfo.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
  !/^(0?[6-9]\d{9})$/.test(userInfo.phone.replace(/\s/g, ""))
) {
  newErrors.phone = "Enter a valid Indian mobile number";
}
    if (!userInfo.membershipPlan) {
      newErrors.membershipPlan = "Please select a membership plan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    if (validateForm()) {
      setStep(2);
    }
  }

  async function copyAccountNumber() {
    await navigator.clipboard.writeText(ACCOUNT_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function sendWhatsAppMessage(paymentMade: boolean) {
    const planLabel = selectedPlan
      ? `${selectedPlan.name} (₹${selectedPlan.price}/year)`
      : userInfo.membershipPlan;

    const paymentLabel =
      paymentMethod === "upi"
        ? `UPI (${UPI_ID})`
        : paymentMethod === "account"
          ? `Bank Account (${ACCOUNT_NUMBER})`
          : "Not selected";

    const message = `New Membership Payment Request

Name: ${userInfo.fullName}
Phone: ${userInfo.phone}
Email: ${userInfo.email || "Not provided"}
Membership Plan: ${planLabel}
Payment Method: ${paymentLabel}
Payment Completed: ${paymentMade ? "Yes" : "No"}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-primary min-h-screen">
      <section className="px-6 py-20 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">
          Pay Now
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-xl mx-auto mb-10">
          Complete your membership payment securely via UPI or bank transfer.
        </p>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              step === 1
                ? "bg-accent text-black"
                : "bg-white/10 text-white border border-white/20"
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center text-xs">
              1
            </span>
            Your Details
          </div>
          <div className="w-8 h-px bg-white/30" />
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              step === 2
                ? "bg-accent text-black"
                : "bg-white/10 text-white border border-white/20"
            }`}
          >
            <span className="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center text-xs">
              2
            </span>
            Payment
          </div>
        </div>

        {step === 1 && (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">
              Membership Details
            </h2>
            <form className="space-y-6" onSubmit={handleContinue}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-white font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={userInfo.fullName}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, fullName: e.target.value })
                  }
                  placeholder="Enter your full name"
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors"
                />
                {errors.fullName && (
                  <p className="text-white text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-white font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  placeholder="Enter your 10-digit mobile number"
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors"
                />
                {errors.phone && (
                  <p className="text-white text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email Address{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  placeholder="Enter your email address"
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="membershipPlan"
                  className="block text-white font-medium mb-2"
                >
                  Membership Plan
                </label>
                <select
                  id="membershipPlan"
                  value={userInfo.membershipPlan}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, membershipPlan: e.target.value })
                  }
                  className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:border-accent focus:outline-none transition-colors"
                >
                  <option value="" className="bg-gray-900">
                    Select a plan
                  </option>
                  {MEMBERSHIP_PLANS.map((plan) => (
                    <option key={plan.id} value={plan.id} className="bg-gray-900">
                      {plan.name} — ₹{plan.price}/year
                    </option>
                  ))}
                </select>
                {errors.membershipPlan && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.membershipPlan}
                  </p>
                )}
              </div>

              {selectedPlan && (
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                  <p className="text-white font-medium">
                    Amount to pay:{" "}
                    <span className="text-accent text-xl font-bold">
                      ₹{selectedPlan.price}
                    </span>
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-accent text-black py-4 rounded-lg font-semibold hover:bg-accent/90 transition-colors cursor-pointer"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <button
              onClick={() => setStep(1)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to details
            </button>

            {/* Order summary */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-bold text-white mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Name</span>
                  <span className="text-white">{userInfo.fullName}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Phone</span>
                  <span className="text-white">{userInfo.phone}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Plan</span>
                  <span className="text-white">
                    {selectedPlan?.name} — ₹{selectedPlan?.price}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment method selection */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-2">
                Choose Payment Method
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Select how you would like to pay your membership fee.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    paymentMethod === "upi"
                      ? "bg-accent/20 border-accent text-white"
                      : "bg-black/30 border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <Smartphone className="w-8 h-8" />
                  <span className="font-semibold">UPI</span>
                  <span className="text-xs text-gray-400">Scan QR Code</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("account")}
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                    paymentMethod === "account"
                      ? "bg-accent/20 border-accent text-white"
                      : "bg-black/30 border-white/20 text-gray-300 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <Building2 className="w-8 h-8" />
                  <span className="font-semibold">Account Number</span>
                  <span className="text-xs text-gray-400">Bank Transfer</span>
                </button>
              </div>

              {/* UPI Payment */}
              {paymentMethod === "upi" && (
                <div className="text-center space-y-4">
                  <p className="text-gray-300">
                    Scan the QR code below with any UPI app
                  </p>
                  <div className="bg-white rounded-xl p-4 inline-block mx-auto">
                    <Image
                      src="/qr.png"
                      alt="FDTA UPI QR Code"
                      width={280}
                      height={280}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-white font-medium">
                    UPI ID:{" "}
                    <span className="text-accent">{UPI_ID}</span>
                  </p>
                  {selectedPlan && (
                    <p className="text-gray-400 text-sm">
                      Pay exactly ₹{selectedPlan.price} for your{" "}
                      {selectedPlan.name} membership
                    </p>
                  )}
                </div>
              )}

              {/* Account Number Payment */}
              {paymentMethod === "account" && (
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-6 h-6 text-accent" />
                      <h3 className="text-lg font-semibold text-white">
                        Bank Account Details
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">
                          Account Number
                        </p>
                        <div className="flex items-center justify-between gap-3 bg-white/5 rounded-lg p-4 border border-white/10">
                          <span className="text-white text-xl font-mono font-bold tracking-wider">
                            {ACCOUNT_NUMBER}
                          </span>
                          <button
                            type="button"
                            onClick={copyAccountNumber}
                            className="flex items-center gap-1.5 text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors cursor-pointer shrink-0"
                          >
                            {copied ? (
                              <>
                                <Check className="w-4 h-4 text-green-400" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copy
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm">
                        Transfer the exact membership amount to the account
                        above. Use your name as the payment reference.
                      </p>
                      {selectedPlan && (
                        <p className="text-white font-medium">
                          Amount:{" "}
                          <span className="text-accent text-lg">
                            ₹{selectedPlan.price}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* WhatsApp confirmation */}
            {paymentMethod && (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-2">
                  Confirm Your Payment
                </h3>
                <p className="text-gray-300 text-sm mb-6">
                  After completing the payment, send your details to us via
                  WhatsApp so we can verify and activate your membership.
                </p>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => sendWhatsAppMessage(true)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-5 h-5" />
                    I&apos;ve Made the Payment — Send via WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() => sendWhatsAppMessage(false)}
                    className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-medium transition-colors border border-white/20 cursor-pointer text-sm"
                  >
                    Need help? Contact us on WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
