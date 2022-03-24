import React, { useState } from "react";
import ArtistCard from "../../components/ArtistCard";
import Hr from "../../assets/hr.svg";
import "./styles.css";
import japi from "../../assets/japi.png";
import Tezpuria from "../../assets/artist1.svg";
import PriyankaB from "../../assets/Priyanka.svg";
// import Carousel from "../../components/Carousel";
import PB from "../../assets/pb.svg";
import TT from "../../assets/tezpuriathespian.svg";
// import HoverIcon from "../../assets/swipe_left_right.png";
import ZG from "../../assets/ZG.svg";
import DS from "../../assets/artists card (1).svg";
import NA from "../../assets/artists card.svg";
import SS from "../../assets/artists card (2).svg";
import MR from "../../assets/artists card (3).svg";
import RG from "../../assets/RG.svg";
import arrow from "../../assets/arrow.svg";

const Artist = () => {
  const ArtistImg = [ZG, DS, NA, SS, RG, MR];

  const [show, setShow] = useState(false);

  function openTab(e) {
    e.preventDefault();
    const content = document.getElementsByClassName("details");
    console.log(content);
    content[0].style.maxHeight = 0;
    if (!show) {
      setShow(true);
      const content = document.getElementsByClassName("details");
      content[0].style.maxHeight = content[0].scrollHeight + "px";
    } else {
      setShow(false);
    }
  }

  return (
    <div className="outer_div_artist_page">
      <div className="upcomming_artists">
        <div className="artist_text text-center">
          <h1>
            <img src={japi} className="japi-animation" alt="japi" />
            Upcoming Posua 2022
            <img src={japi} className="japi-animation" alt="japi" />
          </h1>
        </div>
        <div className="artist_upcomming">
          <ArtistCard img={Tezpuria} />
          <ArtistCard img={PriyankaB} />
        </div>
      </div>
      <div className="acc-bg pb-5 artists-acc">
        <div className={"accordion pb-3" + (show ? " accordion-active" : "")}>
          <div className="dropdown">
            <button
              type="button"
              className="accordion_button"
              style={{ width: "70%" }}
              onClick={(e) => openTab(e)}
            >
              <img src={japi} alt="japi" />
              <span> ADDITIONAL DETAILS </span>
              <img
                className="arrow"
                src={arrow}
                style={{ margin: "0" }}
                alt="arrow"
              />
              <img src={japi} alt="japi" />
            </button>
          </div>
          <div className="details mt-3">
            <div className="detail_1">
              {/* <img src={PB} alt="" /> */}
              <div
                className="poster"
                style={{
                  background: `url(${PB}) center no-repeat`,
                  backgroundSize: "contain",
                }}
              ></div>
              <div className="assamese">
                'পছোৱা'-ৰ উদ্দাম বতাহজাকত উন্মনা এন আই টি শিলচৰবাসী লুইতপৰীয়াৰ
                দেহ-মনক দুগুণে শিহৰিত কৰিবলৈ কোনোবা সুদূৰৰ পৰা ভাঁহি আহিছে 'জুৰ
                মলয়া'-ৰ মৃদু-মধুৰ সুৰ। সেয়েহে 'অঁকোৱা-পঁকোৱা' বাটেৰে 'টেক্সি
                গাড়ী লৈ' চেনেহী আজি গুচি যাব খোজে প্ৰেমিক ডেকাৰ লগত। 'এধানি
                কলিজা'-ই যাৰ, নৱযৌৱনৰ বাসন্তী হৃদয়লৈ নমাই আনিব মধুৰ স্বপ্নাৱেশ,
                লিহিৰি হাতেৰে। <br /> এই স্বপ্নৰ মায়াময় আবিৰেৰে চৌদিশ ৰাঙলী
                কৰিবলৈ 'পছোৱা'-ৰ মঞ্চত এইবাৰ উপস্থিত থাকিব অসমৰ এগৰাকী আগশাৰীৰ
                সংগীতশিল্পী- প্ৰিয়ংকা ভঁৰালী। আমি সকলোৱে আগ্ৰহেৰে অপেক্ষা কৰিম,
                'চকুতে লগাকৈ' এটি উছাহভৰা সাংগীতিক সন্ধিয়াৰ বাবে। <br /> <br />{" "}
                #চেনেহৰ_বতৰা_লৈ_পছোৱা_আহিছে_ঐ
                <br /> #দশকৰ_পদূলিত_পছোৱাৰ_ভুমুকি
              </div>
              <div className="eng">
                𝘑𝘶𝘳 𝘔𝘰𝘭𝘰𝘺𝘢 is ready to engulf the mind and souls of 𝘓𝘶𝘪𝘵 𝘗𝘰𝘳𝘪𝘺𝘢s
                in the periphery of NIT Silchar. Let's begin an 𝘖𝘬𝘶𝘢 𝘗𝘰𝘬𝘶𝘢
                journey on 𝘛𝘢𝘹𝘪 𝘎𝘢𝘳𝘪 this spring. On the pulchritudinous evening
                of 26th March, 𝘌𝘥𝘩𝘢𝘯𝘪 𝘒𝘰𝘭𝘪𝘫𝘢 will incite euphoria among the
                𝘋𝘦𝘬𝘢-𝘎𝘢𝘣𝘩𝘰𝘳𝘶𝘴. <br /> Let us relish the 𝘚𝘰𝘬𝘶𝘵𝘦 𝘓𝘰𝘨𝘢𝘬𝘰𝘪
                scintillating staging of the leading female vocalist of Assam,
                𝓟𝓻𝓲𝔂𝓪𝓷𝓴𝓪 𝓑𝓱𝓪𝓻𝓪𝓵𝓲 on the rostrum of POSUA 2022. <br /> <br />{" "}
                #Posua_reviving_exuberance! <br /> #espying_10_years_of_ecstasy
              </div>
            </div>
            <div className="hr_line">
              <img src={Hr} alt=" a line" style={{ margin: " 0 auto" }} />
            </div>
            <div className="detail_1">
              {/* <img src={TT} alt="" /> */}
              <div
                className="poster"
                style={{
                  background: `url(${TT}) center no-repeat`,
                  backgroundSize: "contain",
                }}
              ></div>
              <div className="assamese">
                এজাক মৃদু বৰষুণ আৰু চঞ্চলা পছোৱাৰ বোকোচাত ভাঁহি অহা কুলি-কেতেকীৰ
                আপোন-পাহৰা সুৰৰ যোজনাই নিদ্ৰামগ্ন প্ৰকৃতিৰ শীতৰ শেতেলীত বসন্তৰ
                সঞ্চাৰ কৰে। নিয়ৰৰ ওৰণি গুচাই ন-সূৰুযৰ নব্য কিৰণে হেঙুলী বৰণেৰে
                সাবটি ধৰে সমস্ত ধৰাক। গছৰ জঠৰ ডালত সেউজীয়া কুঁহিপাতৰ চানেকিয়ে
                প্ৰতিজন অসমীয়াক প্ৰেম আৰু ৰং-ৰহইচৰে ভৰা এক অনুপম পৰিবেশৰ
                মাদকতাৰ অনুভৱ দিয়ে। বিগত দুবছৰৰ মহামাৰীৰ সংকটক এইবেলি চ'তৰ লগতে
                বিদাই দি পুনৰ এক অনুপম বসন্তৰ কামনাৰে ঋতুৰাজৰ আগমনৰ প্ৰাক্-ক্ষণত
                অহা ২৬ মাৰ্চ, ২০২২ তাৰিখে ঢোল-পেপা-গগণা, বিহু, ঐনিতম আৰু হৰিনামৰ
                অঙ্গাংগী সম্বন্ধৰ ঝংকাৰত প্ৰবাহিত হোৱা আশীৰ্বাদৰ লহৰত প্ৰতিজনৰ
                অন্তৰত চিৰন্তন শান্তিৰ সঞ্চাৰৰ মানসেৰে ৰাষ্ট্ৰীয়
                প্ৰযুক্তিবিদ্যা প্ৰতিষ্ঠান, শিলচৰৰ পদূলিত পদধূলি দিবলৈ সাজু হৈছে
                তেজপুৰীয়া ডেকা-গাভৰুৰ সুৰ আৰু নৃত্যৰ সমন্বয়ৰ মাধ্যমৰে অসমীয়া
                লোকবাদ্য আৰু লোককৃষ্টিক আন্তৰাষ্ট্ৰীয় পৰ্যায়ত উপস্থাপন কৰা
                সাংস্কৃতিক গোষ্ঠী "তেজপুৰীয়া থেচ্ পিয়ান্ চ"। <br /> <br />{" "}
                #চেনেহৰবতৰালৈপছোৱাআহিছে_ঐ <br /> #দশকৰপদূলিতপছোৱাৰ_ভুমুকি
              </div>
              <div className="eng">
                Posua unleashing the spring filled nature, Tunes of pleasure
                awaiting to mesmerize the dwellers, To dance and sing to the
                crests of exhilaration, Enlivening the vibrant culture! The
                refreshing viridescence crowned by tree canopies, the flower
                buds about to bloom, the sweet chirping of birds from all
                around, and Posua blending it all, is set to welcome Spring, the
                King of all seasons, with utmost vitality. With the onset of
                spring, the land is ready to reverberate again with the
                symphonious rhythms of Dhol, Pepa, Bahi and the melodious
                ebullience of Bihu songs. <br /> Let the advent of spring and
                oozing of Posua stir up your spirits with euphoria. POSUA 2022
                is thrilled to have on board the ‘TEZPURIYA THESPIANS’, an
                indigenous band with a miscellany of performances showcasing the
                best of Assamese culture and taking the same to International
                vanguards. Save the date 26th March to relish this musical
                extravaganza, and get ready to sway to the splendid renditions
                of ‘TEZPURIYA THESPIANS’. <br /> <br />{" "}
                #Posua_reviving_exuberance!
                <br /> #espying_10_years_of_ecstasy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hr_line">
        <img src={Hr} alt=" a line" style={{ margin: " 0 auto" }} />
      </div>
      <div className="prev_yr_artist">
        <div className="artist_text">
          <h1>
            <img src={japi} className="japi-animation" alt="japi" />
            Artists in previous years
            <img src={japi} className="japi-animation" alt="japi" />
          </h1>
        </div>
        <div className="artist_container">
          {/* <Carousel /> */}
          {ArtistImg.map((e) => (
            <ArtistCard img={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
