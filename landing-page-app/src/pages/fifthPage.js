// import React from "react";
// import CustomButton from "../components/buttonForFifthPage.js";
// import Screen from "../components/screen.js";

// const fifthPage = () => {
//   return (
//     <div
//       className="p-5"
//       style={{
//         font: "Roboto",
//         overflow: "hidden",
//         backgroundColor: "rgba(254,252,242,255)",
//       }}
//     >
//       <div className="row custom-text m-5">
//         <h2 style={{ fontSize: "56px", fontWeight: "bold" }}>
//           Grow your collection
//         </h2>
//         <p className="mt-3">
//           Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
//           amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
//           sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
//           proin neque placerat at bibendum quam tellus.
//         </p>
//       </div>
//       <div className="row m-5">
//         <div className="col-md-3">
//           <button
//             type="button"
//             className="shadow d-flex justify-content-between align-items-center"
//             style={{
//               border: "2px solid white",
//               borderRadius: "8px",
//               backgroundColor: "white",
//               color: "black",
//               width: "100%",
//               padding: "10px",
//             }}
//           >
//             <i class="fa-solid fa-magnifying-glass"></i>
//             Bibendum tellus
//             <i class="fa-solid fa-arrow-right"></i>
//           </button>
//           <CustomButton
//             icon="fa-solid fa-shield"
//             text="Cras eget"
//           ></CustomButton>
//           <CustomButton
//             icon="fa-solid fa-rocket"
//             text="Dolor pharetra"
//           ></CustomButton>
//           <CustomButton
//             icon="fa-solid fa-tv"
//             text="Amet, fringilla"
//           ></CustomButton>
//           <CustomButton
//             icon="fa-brands fa-algolia"
//             text="Amet nibh"
//           ></CustomButton>
//           <CustomButton
//             icon="fa-solid fa-sliders"
//             text="Sed velit"
//           ></CustomButton>
//         </div>
//         <div className="col-md-8 d-flex ms-5 justify-content-end" style={{ position: "relative", height:"800px" }}>
//           <Screen image="images/third-page.jpeg" height={"95%"} style={{ top: "0", left: "0", zIndex: "1" }}/>
//           <Screen image="images/second-page-card2.jpeg" height={"95%"} style={{ top: "8%", left: "8%", zIndex: "2" }}/>
//           <Screen image="images/fifth-page-image.jpeg" height={"90%"} style={{ top: "20%", left: "70%", zIndex: "3", width:"200px", height:"230px"}}/>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default fifthPage;

import React from "react";
import CustomButton from "../components/buttonForFifthPage.js";
import Screen from "../components/screen.js";

const fifthPage = () => {
  return (
    <div
      className="p-5"
      style={{
        font: "Roboto",
        overflow: "hidden",
        backgroundColor: "rgba(254,252,242,255)",
      }}
    >
      <div className="row custom-text m-5">
        <h2 style={{ fontSize: "56px", fontWeight: "bold" }}>
          Grow your collection
        </h2>
        <p className="mt-3">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="row m-5">
        <div className="col-md-3">
          <button
            type="button"
            className="shadow d-flex justify-content-between align-items-center"
            style={{
              border: "2px solid white",
              borderRadius: "8px",
              backgroundColor: "white",
              color: "black",
              width: "100%",
              padding: "10px",
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            Bibendum tellus
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <CustomButton icon="fa-solid fa-shield" text="Cras eget" />
          <CustomButton icon="fa-solid fa-rocket" text="Dolor pharetra" />
          <CustomButton icon="fa-solid fa-tv" text="Amet, fringilla" />
          <CustomButton icon="fa-brands fa-algolia" text="Amet nibh" />
          <CustomButton icon="fa-solid fa-sliders" text="Sed velit" />
        </div>
        <div
          className="col-md-8 d-flex ms-5"
          style={{ position: "relative", height: "800px" }}
        >
          <Screen
            image="images/third-page.jpeg"
            height={"95%"}
            style={{ top: "0", left: "0", zIndex: "1" }}
          />
          <Screen
            image="images/second-page-card2.jpeg"
            height={"95%"}
            style={{ top: "8%", left: "8%", zIndex: "2" }}
          />
          <div
            className="shadow p-1 pt-3"
            style={{
              width: "30%",
              height: "30%",
              position: "absolute",
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderRadius: "20px",
              left: "70%",
              top: "20%",
              zIndex: "3",
            }}
          >
            <div
              className="d-flex justify-content-start"
              style={{ position: "absolute", top: "15px", left: "15px" }}
            >
              <div
                style={{
                  marginRight: "5px",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "rgba(225, 29, 72, 1)",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  marginRight: "5px",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "rgba(251, 191, 36, 1)",
                  borderRadius: "50%",
                }}
              ></div>
              <div
                style={{
                  marginRight: "5px",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "rgba(34, 197, 94, 1)",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
            <img
              src="images/fifth-page-image.jpeg"
              alt="screen"
              style={{
                width: "100%",
                height: "90%",
                borderRadius: "15px",
                marginTop: "20px",
                position: "relative",
                zIndex: "2",
              }}
            />
          </div>
            {/* Arka planın üstüne gelecek resim */}
      <img
        src="images/waves.png" // Buraya eklemek istediğiniz resmin yolu
        alt="Waves"
        style={{
          position: "absolute", // Resmi konumlandırmak için
          top: "50%", // Y ekseninde ortalama
          left: "40%", // X ekseninde ortalama
          transform: "translate(-50%, -50%)", // Gerçekten ortalamak için
          width: "200%", // İsteğe bağlı: genişlik ayarı
          height: "100%", // Orantılı yükseklik
          zIndex: 1, // Arka planda görünmesini sağlamak için
        }}
      />
        </div>
      </div>
    </div>
  );
};

export default fifthPage;
