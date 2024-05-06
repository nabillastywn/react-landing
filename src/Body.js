import React, { useState } from "react";
import ImgAbout from "./img/gamelab.png";
import {
  BennerStyle,
  ButtonStyle,
  BennerText,
  AboutStyle,
  AboutImg,
  AboutHeading,
  AboutText,
  FormContainer,
  FormLabel,
  FormInput,
  FormTextarea,
  FormButton,
  TestiStyle,
  ShowButton,
} from "./StyledBody";

const Body = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [testimonials, setTestimonials] = useState([]);
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputText, setInputText] = useState("");

  const toggleAddress = () => {
    setShowMessage(!showMessage);
  };

  const redirectToGamelab = () => {
    window.open("https://www.gamelab.id/", "_blank");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setInputAuthor(e.target.value);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const sendMessage = () => {
    console.log("Pesan Terkirim:");
    console.log("Nama:", name);
    console.log("Email:", email);
    console.log("Pesan:", message);
    // Menambahkan pesan ke daftar testimonial
    if (message.trim() !== "") {
      const newTestimonial = {
        author: name,
        email: email,
        text: message,
      };
      setTestimonials([...testimonials, newTestimonial]);
      setMessage("");
      setEmail(""); // Clear email field after sending message
    }
  };

  const deleteTestimonial = (index) => {
    const updatedTestimonials = [...testimonials];
    updatedTestimonials.splice(index, 1);
    setTestimonials(updatedTestimonials);
  };

  return (
    <div>
      <BennerStyle>
        <BennerText>
          <h3>Optimasi Skill dan Kompetensi, Lebih Siap Kerja dan Wirausaha</h3>
          <ButtonStyle onClick={redirectToGamelab}>Gamelab.ID</ButtonStyle>
        </BennerText>
      </BennerStyle>
      <AboutStyle>
        <AboutImg>
          <img src={ImgAbout} style={{ height: "300px", width: "300px" }} />
        </AboutImg>
        <AboutText>
          <AboutHeading>GAMELAB.ID</AboutHeading>
          <p>
            GAMELAB menghadirkan platform lengkap untuk meningkatkan kompetensi
            lulusan yang siap kerja dan siap wirausaha melalui program pelatihan
            berbasis proyek (PBL), magang online bersertifikat, dan sertifikasi
            industri.
          </p>
          <ButtonStyle onClick={toggleAddress}>
            {showMessage ? "Sembunyikan Alamat" : "Tampilkan Alamat"}
          </ButtonStyle>
          {showMessage && (
            <p>
              Jl. Kalisombo No.18, Salatiga, Kec. Sidorejo, Kota Salatiga, Jawa
              Tengah, 50711
            </p>
          )}

          <FormContainer>
            <FormLabel htmlFor="name">Nama:</FormLabel>
            <FormInput
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <FormLabel htmlFor="message">Pesan:</FormLabel>
            <FormTextarea
              id="message"
              value={message}
              onChange={handleMessageChange}
            />
            <FormButton type="button" onClick={sendMessage}>
              Kirim Pesan
            </FormButton>
          </FormContainer>

          {/* Menampilkan daftar testimonial */}
          <TestiStyle className="testimonial-list">
            {testimonials.map((testimonial, index) => (
              <div className="box" key={index}>
                <h2 className="card-title">{testimonial.author}</h2>
                <p className="card-text">{testimonial.email}</p>
                <p className="card-text">{testimonial.text}</p>
                <ShowButton onClick={() => deleteTestimonial(index)}>
                  Hapus
                </ShowButton>
              </div>
            ))}
          </TestiStyle>
        </AboutText>
      </AboutStyle>
    </div>
  );
};

export default Body;
