import React, { useState } from "react";
import {
  Phone,
  Mail,
  CheckCircle,
  User,
  Stethoscope,
  Award,
  Clock,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("תודה על פנייתך! נחזור אליך בהקדם האפשרי.");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Stethoscope className="h-8 w-8 text-blue-900" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">ד"ר רמי מור</h1>
                <p className="text-sm text-gray-600">
                  רפואה תעסוקתית ובריאות הציבור
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 space-x-reverse">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                אודות
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                שירותים
              </a>
              <a
                href="#qualifications"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                התמחויות
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                יצירת קשר
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-l from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ד"ר רמי מור
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-blue-200">
                מומחה ברפואה התעסוקתית ובריאות הציבור
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                בעל ניסיון רב בעבודה עם גופים תעשייתיים, מוסדות רפואיים, קרנות
                פנסיה וביטוח לאומי. מתמחה בקביעת דרגות נכות, ניהול סיכונים
                רפואיים וייעוץ תעסוקתי מקצועי.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  לתיאום פגישה
                </a>
                <a
                  href="tel:0504848950"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  התקשר עכשיו
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-48 h-48 bg-white bg-opacity-20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <User className="w-24 h-24 text-white opacity-60" />
                </div>
                <p className="text-blue-200 text-sm">תמונה אישית</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              אודותי
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                מומחיות מקצועית
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                כרופא מומחה ברפואה תעסוקתית ובריאות הציבור, אני מביא ניסיון עשיר
                של שנים רבות בתחום. התמחותי כוללת הערכות רפואיות מקיפות, ייעוץ
                תעסוקתי מקצועי, וכתיבת חוות דעת משפטיות מדויקות.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                אני עובד בשיתוף פעולה הדוק עם גופים תעשייתיים, מוסדות רפואיים
                מובילים, קרנות פנסיה, וביטוח לאומי כדי להבטיח טיפול מקצועי ויעיל
                בכל מקרה.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                תפקידים נוכחיים
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    רופא תעסוקתי במחוז דרום - קופת חולים מאוחדת
                  </p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    רופא קרן בוועדות רפואיות מטעם קרנות פנסיה
                  </p>
                </div>
                <div className="flex items-start space-x-3 space-x-reverse">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    יועץ רפואי למגזר התעשייתי והעסקי
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section id="qualifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              התמחויות והסמכות
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "קביעת דרגות נכות", icon: Award },
              { title: "ניהול סיכונים רפואיים", icon: Stethoscope },
              { title: "כתיבת חוות דעת משפטיות", icon: User },
              { title: "בדיקות כשירות לעבודה", icon: CheckCircle },
              { title: "ייעוץ רפואי תעסוקתי", icon: Clock },
              { title: "ניהול סיכונים בריאותיים", icon: Award },
            ].map((qual, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <qual.icon className="w-8 h-8 text-blue-900 ml-3" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {qual.title}
                  </h3>
                </div>
                <div className="w-full h-1 bg-blue-100 rounded">
                  <div
                    className="h-1 bg-blue-900 rounded"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              שירותים מקצועיים
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "בדיקות כשירות לעובדים חדשים",
              "בדיקות תקופתיות לעובדים בסיכון",
              "ייעוץ תעסוקתי למנהלים ומשאבי אנוש",
              "חוות דעת רפואית למקרי היעדרות",
              "ביקורי רופא באתר הלקוח",
              "הדרכות בטיחות וגיהות",
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-green-600 ml-4 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">יצירת קשר</h2>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">פרטי התקשרות</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-blue-400 ml-4" />
                  <div>
                    <p className="text-lg font-semibold">טלפון</p>
                    <a
                      href="tel:0504848950"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      050-484-8950
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 ml-4" />
                  <div>
                    <p className="text-lg font-semibold">דואר אלקטרוני</p>
                    <a
                      href="mailto:Dr.RamiMor@gmail.com"
                      className="text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      Dr.RamiMor@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gray-800 rounded-xl">
                <h4 className="text-xl font-bold mb-4">שעות קבלה</h4>
                <p className="text-gray-300">
                  ימים א'-ה': 08:00-18:00
                  <br />
                  יום ו': 08:00-13:00
                  <br />
                  שבת: סגור
                </p>
                <p className="text-blue-300 mt-4 text-sm">
                  * קבלה בתיאום מראש בלבד
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-8">
                השאר פרטים ונחזור אליך
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    שם מלא *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors text-white"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    טלפון *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors text-white"
                    placeholder="הכנס מספר טלפון"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    דואר אלקטרוני
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors text-white"
                    placeholder="הכנס כתובת מייל"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    נושא הפנייה
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors text-white"
                  >
                    <option value="">בחר נושא</option>
                    <option value="medical-consultation">ייעוץ רפואי</option>
                    <option value="disability-assessment">הערכת נכות</option>
                    <option value="fitness-for-work">
                      בדיקת כשירות לעבודה
                    </option>
                    <option value="medical-opinion">חוות דעת רפואית</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors text-white resize-none"
                    placeholder="תאר בקצרה את הצורך שלך..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  שלח הודעה
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 ד"ר רמי מור. כל הזכויות שמורות.</p>
          <p className="text-sm mt-2">רפואה תעסוקתית ובריאות הציבור</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
