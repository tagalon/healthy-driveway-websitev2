import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Healty Driveway started in 2018.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.instagram.com/healthydriveway/">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/SrinivasaGanip1">Twitter</a>
          </li>
          <li>
            <a href="https://www.facebook.com/Healthy-Driveway-106662421130344/?modal=admin_todo_tour">Facebook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;