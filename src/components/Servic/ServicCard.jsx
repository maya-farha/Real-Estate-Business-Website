import "./ServiceCard.css";

function ServicCard({ logo, alt, titleService, link }) {
  return (
    <div className="MF-serviceCard">
      <img
        src="/assets/icons/arrowTop.svg"
        alt="arrowTop"
        className="MF-arrowTop"
      />

      <img src={logo} alt={alt} className="MF-serviceLogo" />

      {titleService ? (
        <p className="mswhiteColor">{titleService}</p>
      ) : Array.isArray(link) ? (
        <div className="MF-socialLink">
          {link.map((item, index) =>
            item?.url ? (
              <a
                key={index}
                href={item.url}
                className="mswhiteColor"
                target="_blank"
              >
                {item.label || item.url}
              </a>
            ) : null
          )}
        </div>
      ) : link?.url ? (
        <a href={link.url} className="mswhiteColor" target="_blank">
          {link.label || link.url}
        </a>
      ) : null}
    </div>
  );
}

export default ServicCard;
