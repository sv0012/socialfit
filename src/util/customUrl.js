const customUrl = (url) => {
    return "https" + url.split("").splice(4).join("");
  };

export default customUrl;
