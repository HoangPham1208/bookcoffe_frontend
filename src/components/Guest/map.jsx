export default function Map() {
  return (
    <>
      <div className="google-map-code w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2129162578444!2d106.71695058496019!3d10.794998431419808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%2081!5e0!3m2!1sen!2sus!4v1704365112838!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="HQ location"
        ></iframe>
      </div>
    </>
  );
}
