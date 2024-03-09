const messages = [
  {
    title: "Congratulations on your baby, Star!",
    body: "I can’t wait to see your guys' mini-me; she’s going to be so beautiful! <3 I hope the rest of your pregnancy is filled with hearty laughter, yummy food, and good health and that you’ll have a safe, healthy delivery!  Also, I just want to tell you that from what I know about you, you’re going to be a great mom. :)",
    from: "~~Call me, beep me, if ya wanna reach me~~ Always looking forward to talking with you, so call me whenever! Sending you lots of love,",
    person: "Michelle",
    embed: "video",
    url: "https://www.youtube.com/embed/s8muxst31cw?si=AzIeE_1S5z856kan&amp;clip=Ugkx4yiKbI26uIpaRaaFRo0Nc3u-GizUZRjY&amp;clipt=EMC7ARiIoQI",
  },
  {
    title: "Congratulations!!",
    body: "So happy for your growing family! Hope the rest of your pregnancy and delivery will be safe and stress-free, and that you would have quality time to rest and be with your new baby post-partum! Sending my love and support to you from afar <3",
    from: "",
    person: "~Flora",
  },
  {
    title: "Star,",
    body: "I'm so happy for this next chapter in your life! You're going to be the most incredible mom!! Praying that your delivery is smooth and wishing a lifetime of health and happiness for you and your family <3 ",
    from: "",
    person: "~Rachel",
  },
  {
    title: "",
    body: "",
    from: "",
    person: "",
    embed: "image",
    url: "./braincell.png",
  },
  {
    title: "Congratulations, Star!!",
    body: "I’ve always loved that Branner family photo of you guys and now you’re on your way to assembling your own dynasty!!! You’re going to be an amazing mom. Can’t wait for your family photos!! Hope your delivery is safe and full of rest afterwards!! <3 ",
    from: "",
    embed: "image",
    url: "./brammys.png",
    person: "Jenny",
  },
  {
    title: "",
    body: "",
    from: "",
    person: "",
    embed: "image",
    url: "./milpitasstar.png",
  },
  {
    title: "Congrats Star!!",
    body: " Hope you have such a beautiful baby and so happy to hear that you’ll be a mama! Hope your family will be filled with lots of happiness and joy with your new baby <3",
    from: "",
    person: "~Seimi",
  },
  {
    title: "CONGRATS STAR (AND NICK)!!!!",
    body: "Incredibly happy for you guys, and sending you best wishes for the next (exciting) chapter of your lives! Can’t wait to meet gummy bear and watch her grow into an amazing person just like you!! ",
    from: "",
    person: "- Cindy",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("#button");
  let currIndex = -1;
  button.addEventListener("click", function () {
    currIndex = (currIndex + 1) % messages.length;
    const message = messages[currIndex];
    document.querySelector("#title").textContent = message.title;
    document.querySelector("#body").textContent = message.body;
    console.log(message.embed);

    if (message.embed && message.embed === "video") {
      let embed_div = document.querySelector("#embed");
      embed_div.innerHTML = `<iframe width="400" height="315" src="${message.url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else if (message.embed && message.embed === "image") {
      let embed_div = document.querySelector("#embed");
      embed_div.innerHTML = `<img src="${message.url}" alt="branner family" class="w-[400px]">`;
    } else {
      let embed_div = document.querySelector("#embed");
      embed_div.innerHTML = ``;
    }
    document.querySelector("#from").textContent = message.from;
    document.querySelector("#person").textContent = message.person;
  });
});
