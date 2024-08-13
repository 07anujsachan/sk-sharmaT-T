import React from "react";
import { useState } from "react";
import { Header } from "./Header";

export const Attractions = () => {
  const AttractionsData = [
    {
      name: "Dharamshala Stadium",
      image: "/attractions/hpca_tadium.jpg",
      description:
        "The stadium served as the home ground for the Himachal Pradesh cricket team for Ranji Trophy matches and other domestic matches.The stadium also hosted some IPL matches as a home stadium for Punjab Kings.[5] The picturesque venue is unique in India as it is situated at an altitude of 1,457 m above sea level and has snow-capped Himalayan mountains in the background. Getting to Dharamsala from the nearby Kangra Airport, which is about 8 kilometres away through the hilly terrain and the harsh winters, during which it rains and snows.",
    },
    {
      name: "Chamunda Devi Temple",
      image: "/attractions/chamunda.jpg",
      description:
        "Shri Chamunda Devi Temple also known as Chamunda Nandikeshwar Dham is a Hindu temple dedicated to Shri Chamunda Devi, a form of Goddess Durga, located at 19 km away from Palampur town in Dharamshala Tehsil of Kangra district of the Northern Indian state of Himachal Pradesh. This is one of the most prominent temples in Himachal Pradesh and one of the most popular all over India. It is believed that whatever vow is prayed here manifests in reality.The much older Aadi Himani Chamunda which is also the original shrine, is situated at the hilltop, making it difficult for pilgrims to reach. Thus, this temple was constructed around 400 years ago for the ease of the believers.",
    },
    {
      name: " Brijeshwari Devi Temple",
      image: "/attractions/kangra.jpg",
      description:
        "Shree Bajreshwari Mata Temple also known as Kangra Devi Mandir is a Hindu temple, one of the 51 Shakti Pithas dedicated to the goddess Vajreshvari, a form of Goddess Durga located in the town Kangra in the Northern Indian state of Himachal Pradesh. The temple complex has several smaller temples dedicated to other Hindu deities. There is also a temple of Bhairava here. The temple is particularly famous for its Navratri festival, which is celebrated twice a year.The Vajreshwari temple is located in the town of Kangra, Kangra district, Himachal Pradesh, India and is 3 km away from both the railway stations of Kangra Mandir and Kangra of Kangra City.The original temple is said to have been built by the Pandavas at the time of Mahabharatha.",
    },
    {
      name: "War Memorial",
      image: "/attractions/war-memorial.jpg",
      description:
        "The War Memorial in Dharamshala is a significant landmark dedicated to the brave soldiers who sacrificed their lives for India. Located in the picturesque town of Dharamshala in the Kangra district of Himachal Pradesh, the War Memorial serves as a tribute to the soldiers from the region who fought in various wars and military operations post-Independence.The War Memorial in Dharamshala stands as a solemn reminder of the ultimate sacrifice made by soldiers for the country. It is a place that evokes both pride and reverence, making it an essential stop for visitors to Dharamshala.",
    },
    {
      name: "Jwala Devi Temple",
      image: "/attractions/jwala-devi-temple.jpg",
      description:
        "Jwala Devi, also known as Jwalamukhi, is one of the most revered temples in the Kangra Valley of Himachal Pradesh, not far from Dharamshala. This ancient temple is dedicated to the Hindu goddess Jwalamukhi, who is believed to manifest as a flame. The temple is unique and holds a special place in Hindu mythology and religious practices.The temple is dedicated to Goddess Jwalamukhi, an incarnation of the Hindu goddess Durga. Unlike typical temples, the deity here is not represented by an idol but by a set of nine eternal flames that burn continuously without any apparent fuel. These flames are believed to be a manifestation of the goddess herself.",
    },
    {
      name: "MCLEODGANJ",
      image: "/attractions/MCLEODGANJ.jpg",
      description:
        "McLeod Ganj or McLeodganj (pronounced /məˈklaʊd ˌɡʌndʒ/) is a suburb of Dharamshala in Kangra district, Himachal Pradesh, India. It is known as Little Lhasa or Dhasa as the Tibetan government-in-exile is headquartered here and there is a significant population of Tibetans in the region.The region finds references in ancient Hindu scriptures such as Rig Veda and Mahabharata.[4] There are mentions of the region by Pāṇini in 4th century BC and by Chinese traveler Heun Tsang during the reign of king Harshavardhana in 7th century AD.",
    },
    {
      name: "Naddi View Point",
      image: "/attractions/naddi.jpg",
      description:
        "Naddi View Point is a popular tourist attraction located near Dharamshala, in the Kangra district of Himachal Pradesh. Known for its breathtaking views of the Dhauladhar mountain range and the surrounding landscapes, Naddi View Point is a must-visit spot for nature lovers, photographers, and those seeking tranquility in the lap of the Himalayas.The primary attraction of Naddi View Point is the stunning view of the snow-capped Dhauladhar mountain range. The point offers an unobstructed, close-up view of the peaks, which are especially spectacular during sunrise and sunset when the mountains are bathed in golden light.",
    },
    {
      name: "Bhagsu Waterfall",
      image: "/attractions/bhagsu.jpg",
      description:
        "Bhagsu Waterfall, also known as Bhagsunag Waterfall, is one of the most famous natural attractions in Dharamshala, Himachal Pradesh. Nestled in the quaint village of Bhagsu, near McLeod Ganj, this waterfall is a popular destination for tourists, nature lovers, and trekkers.Bhagsu Waterfall is located about 2 kilometers from McLeod Ganj and around 7 kilometers from Dharamshala. It is situated in the village of Bhagsu, which is also home to the revered Bhagsunag Temple.The waterfall is set against the backdrop of lush green hills and rocky terrain. The water cascades down from a height of around 30 feet, creating a mesmerizing sight, especially during the monsoon season when the waterfall is at its fullest.",
    },
    {
      name: "Dal Lake",
      image: "/dal-lake.jpeg",
      description:
        "Dal Lake in Dharamshala is a serene and picturesque spot nestled amidst the lush green Deodar forests of Himachal Pradesh. It is a popular destination for tourists seeking peace and natural beauty in the Kangra Valley. Not to be confused with the more famous Dal Lake in Srinagar, this smaller yet equally charming lake offers a tranquil retreat away from the hustle and bustle of city life.Dal Lake is located about 11 kilometers from Dharamshala and 2 kilometers from McLeod Ganj, making it easily accessible for visitors staying in these popular tourist hubs. The lake is situated at an altitude of approximately 1,775 meters above sea level, surrounded by dense Deodar trees.The lake is known for its calm, greenish waters, which mirror the surrounding pine and deodar trees, creating a picturesque and peaceful environment. The lush greenery and the reflection of the mountains and trees in the water make it a favorite spot for photography and relaxation.",
    },
    {
      name: "Kangra Fort",
      image: "/kangra-fort.jpg",
      description:
        "The Kangra fort is a historic fort located in the Kangra district of the Himachal Pradesh state, India. This fort is also known as 'Nagarkot' and 'Kot Kangra'.[1] This fort stands on a hillock between two rivers (Manjhi and Banganga), among the foothills of the Dhauladhar range. This fort is the largest in the Indian Himalayas, The Kangra Fort is located 20 kilometers (12 mi) from the town of Dharamsala on the outskirts of the town of Kangra, in the Kangra district.",
    },
    {
      name: "Dalailama Temple",
      image: "/attractions/tantrik.jpg",
      description:
        "The Dalai Lama Temple, also known as Tsuglagkhang Complex or Tsuglagkhang Monastery, is a significant spiritual and cultural center located in McLeod Ganj, near Dharamshala in Himachal Pradesh. It is the residence of His Holiness the 14th Dalai Lama and serves as a place of worship, learning, and community gathering for Tibetan Buddhists.The Dalai Lama Temple is situated in McLeod Ganj, about 5 kilometers from Dharamshala. Perched on the slopes of the Dhauladhar mountain range, the temple offers stunning views of the surrounding hills and valleys, making it a serene and inspiring location.The Tsuglagkhang Complex is one of the most important religious sites for Tibetan Buddhists outside of Tibet. It is not only the official residence of the Dalai Lama but also a spiritual hub where followers of Buddhism come to meditate, pray, and attend teachings.",
    },
    {
      name: "St John Church",
      image: "/attractions/sjchurch.jpeg",
      description:
        "St. John in the Wilderness Church is one of the oldest and most historically significant churches in Himachal Pradesh, located near Dharamshala. This Anglican church, set amidst dense deodar forests, is renowned for its serene atmosphere, Gothic architecture, and historical significance, making it a popular attraction for tourists and history enthusiasts.St. John in the Wilderness Church was built in 1852 and is one of the few structures that survived the devastating earthquake of 1905, which destroyed much of the Kangra Valley. The church stands as a testament to the British colonial era in India.",
    },
    {
      name: "Atal Tunnel",
      image: "/attractions/atal.png",
      description:
        "The Atal Tunnel, named after former Indian Prime Minister Atal Bihari Vajpayee, is a marvel of modern engineering located in the Indian state of Himachal Pradesh. This tunnel is one of the highest and longest road tunnels in the world, and it serves as a crucial link between the Kullu Valley and the Lahaul-Spiti Valley in the Himalayas, providing year-round connectivity that was previously cut off by heavy snowfall during the winter months.The Atal Tunnel is located in the Pir Panjal range of the Himalayas. It connects Manali in the Kullu Valley to Sissu in the Lahaul-Spiti Valley.",
    },
    {
      name: "Bir Billing",
      image: "/attractions/Bir-Billing.jpg",
      description:
        "Bir is a rural village located in the west of Joginder Nagar Valley in the state of Himachal Pradesh in northern India. It's the paragliding capital of India[1][2] and the location of the Bir Tibetan Colony, founded in the early 1960s as a settlement for Tibetan refugees after the 1959 Tibetan uprising.Bir Billing provides the option of Paragliding, Trekking, Mountain Biking, Angling and Camping. Billing is situated north of Bir at the distance of 14 km and gateway to the Thamsar Pass trek (4750 mts).",
    },
    {
      name: "Hanuman Ka Tibba",
      image: "/attractions/hanumankatibba.jpg",
      description:
        "Hanuman ka Tibba, also known as White Mountain, is the highest peak in the Dhauladhar range of the Himalayas, located near McLeod Ganj in Dharamshala, Himachal Pradesh. Standing tall at an elevation of approximately 5,982 meters (19,626 feet), it is a popular destination for trekkers and mountaineers seeking adventure and breathtaking views of the surrounding landscapes.The trek to Hanuman ka Tibba is considered challenging and is recommended for experienced trekkers and mountaineers. It involves traversing steep inclines, rocky terrain, and potentially snowy paths, especially at higher altitudes.",
    },
    {
      name: "Hidimba Temple",
      image: "/attractions/hidimba.jpg",
      description:
        "Hidimba Devi Temple, locally known as Dhungari Temple,[1] also known variously as the Hadimba Temple, is a Hindu Temple, located in Manāli, a hill station in the State of Himāchal Pradesh in north India. It is an ancient cave temple dedicated to Hidimbi Devi, wife of Bhima, a figure in the Indian epic Mahābhārata. The temple is surrounded by a cedar forest called Dhungiri Van Vihar at the foot of the Himālayas. The sanctuary is built over a huge rock jutting out of the ground which was worshiped as an image of the deity. The structure was built in 1553 by Maharaja Bahadur Singh.The Hidimba Devi temple was built in 1553 CE by Maharaja Bahadur Singh.The temple is built around a cave where Devi Hidimba performed meditation. ",
    },
    {
      name: "Jogini Waterfall",
      image: "/attractions/jogini.jpg",
      description:
        "Jogini Falls is a waterfall with a stream running down to join the river Beas in the Kullu Valley below. It is sacred to the village goddess Jogini & is therefore a place of female power, known as a Shakti Peeth. One can enjoy an energizing dip under these cascading falls while admiring the towering snow clad mountains all around. Below the falls there is a small shrine and below that is a Main Shrine (small temple). Villagers go to Jogini Devi to make offerings & to ask for her intercession. As it is such a peaceful, even soporific, sacred place, villagers also go there occasionally to sleep. Special occasions are marked by the cooking of food & the performance of rituals.",
    },
    {
      name: "Manikaran Sahib",
      image: "/attractions/mani.jpg",
      description:
        "Manikaran Sahib is a revered pilgrimage site located in the Parvati Valley, nestled in the Kullu district of Himachal Pradesh, India. This sacred place holds immense significance for both Sikhs and Hindus, attracting thousands of devotees and tourists each year. Known for its hot springs, religious shrines, and scenic beauty, Manikaran Sahib is a place where spirituality and nature come together in perfect harmony.One of the most fascinating features of Manikaran Sahib is its hot springs, which are believed to have healing properties. The water is so hot that food, such as rice and vegetables, is cooked directly in the springs and served as part of the Langar (community kitchen) at the Gurudwara.",
    },
    {
      name: "Solang Valley",
      image: "/attractions/solang.webp",
      description:
        "Solang Valley is famous for its lush green meadows, snow-capped peaks, and pristine landscapes. Surrounded by dense forests of pine and cedar, the valley offers stunning views of the surrounding Himalayan mountains and the Beas River, which meanders through the valley.During the winter season, Solang Valley becomes a hub for skiing and snowboarding. The snow-covered slopes attract both beginners and experienced skiers, with facilities and equipment available for rent.",
    },
    {
      name: "Khajjiyar",
      image: "/attractions/dalhousie.jpg",
      description:
        "Khajjiar is a hill station in the north Indian state of Himachal Pradesh. Dating from the 12th century, Khajji Nag Temple is dedicated to a serpent god. Nearby, the high-altitude Khajjiar Lake is surrounded by cedar forest. West, Kalatop Wildlife Sanctuary is home to animals including deer and bears. Farther west, Dalhousie is a hill station with mountain views, dotted with temples and 19th-century British churches.The dish-shaped Khajjiar provides a panoramic and breathtaking perspective to visitors. Khajjiar was officially baptized by the Swiss Ambassador on July 7, 1992 and as per records, a stone was taken here and forms part of the stone sculpture erected in Berne, capital of Switzerland.",
    },
    {
      name: "Shimla",
      image: "/attractions/shimla-photo.jpeg",
      description:
        "Shimla, the capital of the northern state of Himachal Pradesh, which borders Punjab, is India's largest and best known hill station. It spans a 12km ridge in the foothills of the Himalayas, with steep, forested slopes falling away below and mountain views above.In 1864 Shimla was declared as the summer capital of India. After Independence, Shimla became the capital of Punjab and was later named the capital of Himachal Pradesh. In 1903 a rail line was constructed between Kalka and Shimla. Shimla has been blessed with all the natural bounties, one can think of.",
    },
    {
      name: "Palampur Tea Garden",
      image: "/attractions/teagarden.avif",
      description:
        "Palampur is the tea capital of northwest India but tea is just one aspect that makes Palampur a special interest place. Abundance of water and proximity to the mountains has endowed it with mild climate. The town has derived its name from the local word palum, meaning lots of water.The tea industry in Palampur has a rich legacy, dating back to the colonial era when the British introduced tea cultivation in the region. The tea estates were first conceived in India during the 19th century. These tea estates or gardens have only been a tea lover's paradise since that time.",
    },
    {
      name: "Golden Temple",
      image: "/attractions/golden.jpg",
      description:
        "The man-made pool on the site of the temple was completed by the fourth Sikh Guru, Guru Ram Das, in 1577.In 1604, Guru Arjan, the fifth Sikh Guru, placed a copy of the Adi Granth in the Golden Temple and was a prominent figure in its development.The gurdwara was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Mughal and invading Afghan armies.Maharaja Ranjit Singh, after founding the Sikh Empire, rebuilt it in marble and copper in 1809, and overlaid the sanctum with gold leaf in 1830. This has led to the name the Golden Temple. The Golden Temple is spiritually the most significant shrine in Sikhism. It became a centre of the Singh Sabha Movement between 1883 and the 1920s, and the Punjabi Suba movement between 1947 and 1966.",
    },
  ];
  return (
    <div>
      <Header />
      <div className="about-bg lg:h-[400px] md:h-[300px] h-96  flex justify-center items-center ">
        <h3 className=" lg:text-6xl md:text-4xl text-2xl font-semibold text-white ">
          {" "}
          Best Places To Visit In Himachal Pradesh
        </h3>
      </div>
      <div className="mx-auto max-w-[1100px] my-20  p-4">
        {AttractionsData.map((location, index) => (
          <div
            className={` flex flex-col w-full mt-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } `}
          >
            <figure className="w-full md:w-1/2">
              <img
                className="w-full h-full rounded-md"
                src={location.image}
                alt="#"
              />
            </figure>
            <div
              className={`py-24  w-full md:w-1/2 ${
                index % 2 === 0 ? "md:pl-12 lg:pl-12 " : "pr-12"
              }`}
            >
              <h3 className="text-5xl font-semibold text-[#124E66]">
                {" "}
                {location.name}
              </h3>
              <p className="text-2xl my-4 text-gray-600 leading-snug">
                {location.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="mx-auto max-w-[1100px] my-20  ">
        <div className=" flex w-full">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/hpca_tadium.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 px-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              H P C A Stadium
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Tea Garden
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/teagarden.avif"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12  ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/chamunda.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Chamunda Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Brijeshwari Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/kangra.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/war-memorial.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              War Memorial
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Jwala Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/jwala-devi-temple.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/MCLEODGANJ.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Mcleodganj
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Naddi View Point
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/naddi.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/bhagsu.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Bhagsu Waterfall
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]"> Dal Lake</h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//dal-lake.jpeg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//triund.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Triund Trek
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Kangra Fort
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//kangra-fort.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12 ">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/tantrik.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              DalaiLama Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              St John Church
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-lg"
              src=".//attractions/sjchurch.jpeg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/atal.png"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Atal Tunnel
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Bir-Billing
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/bir-billing.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/hanumankatibba.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Hanuman Ka Tibba
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Hidimba Devi Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/hidimba.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/jogini.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Jogini Waterfall
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Manikaran Sahib
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/mani.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/solang.webp"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Solang Valley
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Golden Temple
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/golden.jpg"
              alt="#"
            />
          </figure>
        </div>
        <div className=" flex w-full mt-12">
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/dalhousie.jpg"
              alt="#"
            />
          </figure>
          <div className="py-24 pl-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Khajjiyar
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
        </div>
        <div className=" flex w-full mt-12 ">
          <div className="py-24 pr-12 w-1/2">
            <h3 className="text-5xl font-semibold text-[#124E66]">
              {" "}
              Shimla
            </h3>
            <p className="text-2xl my-4 text-gray-600 leading-snug">
              The stadium served as the home ground for the Himachal Pradesh
              cricket team for Ranji Trophy matches and other domestic matches.
              The stadium also hosted some IPL matches as a home stadium for
              Punjab Kings.[5] The picturesque venue is unique in India as it is
              situated at an altitude of 1,457 m above sea level and has
              snow-capped Himalayan mountains in the background. Getting to
              Dharamsala from the nearby Kangra Airport, which is about 8
              kilometres away through the hilly terrain and the harsh winters,
              during which it rains and snows.
            </p>
          </div>
          <figure className="w-1/2">
            <img
              className="w-full h-full rounded-md"
              src=".//attractions/shimla-photo.jpeg"
              alt="#"
            />
          </figure>
        </div>
      </div>  */}
    </div>
  );
};
