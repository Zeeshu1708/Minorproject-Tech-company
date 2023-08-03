import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram  } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home">
                <main>
                    <h1>TechStar</h1>
                    <p>Solution to all your problems.</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>We are your one and only solution to the tech problems that you face every day. We are leading tech company whose aim is to increase the problem solving ability in childrens.</p>
                </div>
            </div>
            <div className="home3">
                <div>
                    <h2>Who are we?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consectetur perspiciatis laborum, consequatur recusandae nihil reiciendis voluptas dolore, ipsa omnis architecto maxime incidunt nobis, praesentium pariatur sint doloremque dolorum eveniet commodi ullam ducimus quia? Vitae deleniti eligendi molestiae quas aspernatur eaque temporibus dolorem. Quia sequi, ipsam tempora sit quos quisquam?F Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veniam, sequi tempore distinctio commodi sit fugiat maxime enim. Eos ipsam inventore voluptate sunt ullam delectus commodi tenetur modi nesciunt doloribus, voluptas odit illo amet sapiente? Sed libero perferendis id at omnis, placeat assumenda tempore veniam asperiores. Quis voluptate deleniti odio!</p>
                </div>
            </div>

            <div className="home4">
                <div>
                    <h2>Brands</h2>
                    <article >
                        <div style={{animationDelay:" 0.3s"}}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:" 0.5s"}}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                        <div style={{animationDelay:" 0.7s"}}>
                            <AiFillYoutube />
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:" 1s"}}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
