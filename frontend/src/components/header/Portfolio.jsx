import React, { useEffect , useRef ,useState} from "react";
// import { useFrame } from "@react-three/fiber";
import { useTypewriter } from "react-simple-typewriter";
import { MdOutlineWavingHand } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aboutme from "./About";
import Skills from "./Skills";
import Contactme from "./Contact";
// import Footer from "../footer/Footer";
import "./Portfolio.css";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; // for playing animation of model 
import { Html, useProgress } from "@react-three/drei";
import travelStoryimg from '../../../public/TravelStory.jpg';
import portfolio from '../../../public/portfolio.png';
import pokemon from '../../../public/pokemon.png';
import bridgeimg from '../../../public/bridge.png';



const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <span className="canvas-loader"></span>
        <p style={{ fontSize: 14, fontWeight: 800 }}>{progress.toFixed(2)}%</p>
      </div>
    </Html>
  );
};

function Model() {
  const ref = useRef();
  const mixerRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("/models/my-model.glb", (gltf) => {
      if (ref.current) {
        gltf.scene.scale.set(0.02, 0.02, 0.01); // Adjust size
        gltf.scene.position.set(1, -20, -20); // Adjust position
        gltf.scene.rotation.set( 0,0, 0); // Ensure model is upright
        ref.current.add(gltf.scene);
        console.log("Model loaded successfully:", gltf);

        // Setup animations
        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(gltf.scene);
          gltf.animations.forEach((clip) => mixer.clipAction(clip).play());
          mixerRef.current = mixer;
        } 
        setIsLoaded(true);
      }
    },
    (xhr) => {
      console.log(`Loading model: ${(xhr.loaded / xhr.total) * 100}%`);
    },
    (error) => {
      console.error("Error loading model:", error);
    }
  );

    return () => {
      if (ref.current) ref.current.clear();
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
        mixerRef.current.uncacheRoot(mixerRef.current.getRoot());
        mixerRef.current = null;
      }
    };
  }, []);

  useFrame((state, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return (
    <>
      {!isLoaded && <CanvasLoader />}
      <group ref={ref} />
    </>
  );
}
function Portfolio() {
  const [typewriter] = useTypewriter({
    words: ["TASHU", "TASHU", "TASHU"],
    loop: true,
    typeSpeed: 130,
    deleteSpeed: 100,
  });

  // const [typewriterss] = useTypewriter({
  //   words: ["End", "End", "End"],
  //   loop: true,
  //   typeSpeed: 130,
  //   deleteSpeed: 100,
  // });

  
  return (
    <>
      <div className="Portfolio">
        {/* Header Section */}
        <div className="Portfolio-section">
          {/* Left Side */}
          <div className="Portfolio-Text">
            <h1 className="anim">
              <MdOutlineWavingHand className="hello" />
              Hiii<span>!</span>
              <br /> I&#39;m <span>{typewriter}</span>
              <br />
              Web <span>Developer</span>
            </h1>
            <button>
              <Link id="Contact"  to="/contact">
                Contact Me
              </Link>
            </button>
          </div>

          {/* Right Side (3D Model) */}
          <div className="model-div">
            <Canvas style={{ width: "100%", height: "100%"}}>
              <ambientLight intensity={4.0} />
              <directionalLight position={[5, 5, 5]} intensity={1.0} />
              <directionalLight position={[-5, 5, 5]} intensity={1.0} />
              <directionalLight position={[5, -5, 5]} intensity={1.0} />
              <directionalLight position={[-5, -5, 5]} intensity={1.0} />
              <pointLight position={[10, 10, 10]} />
              <Model />
              <OrbitControls />
            </Canvas>
          </div>
        </div>
  
        {/* Projects Section */}
        <div className="Project">
          <h1 className="anim">My Projects</h1>

          {/* Portfolio Project */}
          <div className="Projects">
            <div className="Projects-Detail animationss">
              <h4>Portfolio</h4>
              <p>
                A portfolio website showcasing my skills in web development. 
                This site includes sections about me, my skills, qualifications, and contact information.
              </p>
              <div>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://github.com/kashishprajapati123/Portfolio-/tree/main/src"
                  >
                    React
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://github.com/kashishprajapati123/Portfolio-/tree/main/src"
                  >
                    CSS
                  </Link>
                </button>
              </div>
              <div className="Lower-button">
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://github.com/kashishprajapati123/Portfolio-"
                  >
                    Code <FaGithub className="project-icons" />
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://meripahchan.netlify.app/"
                  >
                    Live Demo <HiExternalLink className="project-icons" />
                  </Link>
                </button>
              </div>
            </div>
            <img className="iframe animation" src={portfolio} alt="Portfolio Preview" />
          </div>

            {/* captureMOments Project */}
          <div className="Projects">
            <div className="Projects-Detail animationss">
              <h4>JourneySync</h4>
              <p>
              It provides a secure and user-friendly platform where travelers can document their experiences, revisit memories, and manage their stories effortlessly
              </p>
              <div>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://pixabay.com/api/?key=38752569-c3faa11ca13f059b35696c7a0"
                  >
                    React API
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://github.com/Tashu22-hub/CaptureMoments/tree/main/Frontend/src"
                  > 
                    Tailwind CSS
                  </Link>
                </button>
              </div>
              <div className="Lower-button">
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://github.com/Tashu22-hub/CaptureMoments"
                  >
                    Code <FaGithub className="project-icons" />
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://capture-moments.vercel.app//"
                  >
                    Live Demo <HiExternalLink className="project-icons" />
                  </Link>
                </button>
              </div>
            </div>
            <img className="iframe animation" src={travelStoryimg} alt="story Preview" />
          </div>
            {/* captureMOments Project */}
          <div className="Projects">
            <div className="Projects-Detail animationss">
              <h4>BridgeOn</h4>
              <p>
              real-time communication platform that allows users to join various rooms, chat, and engage in dynamic interactions. The application leverages modern web technologies to provide a seamless and interactive user experience.
              </p>
              <div>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://pixabay.com/api/?key=38752569-c3faa11ca13f059b35696c7a0"
                  >
                    React API
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://github.com/Tashu22-hub/BridgeOn"
                  > 
                    Tailwind CSS
                  </Link>
                </button>
              </div>
              <div className="Lower-button">
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://github.com/Tashu22-hub/BridgeOn"
                  >
                    Code <FaGithub className="project-icons" />
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://bridge-on-frontend.vercel.app/"
                  >
                    Live Demo <HiExternalLink className="project-icons" />
                  </Link>
                </button>
              </div>
            </div>
            <img className="iframe animation" src={bridgeimg} alt="story Preview" />
          </div>

          {/* Pokémon Project */}
          <div className="Projects">
            <img className="iframe animationss" src={pokemon} alt="Pokémon Website Preview" />
            <div className="Projects-Detail animation">
              <h4>Pokémon Website</h4>
              <p>
                A React-based single-page application that fetches and displays Pokémon details using APIs.
              </p>
              <div>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://pokeapi.co/api/v2/pokemon"
                  >
                    React API
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-buttons"
                    target="_blank"
                    to="https://github.com/Tashu22-hub/API_Pok-mon-/tree/main/src"
                  >
                    Tailwind CSS
                  </Link>
                </button>
              </div>
              <div className="Lower-button">
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://github.com/Tashu22-hub/API_Pok-mon-"
                  >
                    Code <FaGithub className="project-icons" />
                  </Link>
                </button>
                <button>
                  <Link
                    className="Project-button"
                    target="_blank"
                    to="https://pokemonpoke.netlify.app/"
                  >
                    Live Demo <HiExternalLink className="project-icons" />
                  </Link>
                </button>
              </div>
            </div>
          </div>

        

        </div>
      </div>

      
      {/* Additional Sections */}
      <Aboutme />
      <Skills />
      <Contactme />
      {/* <Footer /> */}
    </>
  );
}

export default Portfolio;

