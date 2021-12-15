import FestivalCardLarge from "./FestivalCardLarge";

export default {
  component: FestivalCardLarge,
  title: "Components/Festival Card Large",
};

export const Card = () => (
  <FestivalCardLarge
    name="Summer Breeze"
    location="Dinkelsbühl"
    begin="17.08.2022"
    end="20.08.2022"
    visitors={45000}
    acts={140}
    price={170}
    allacts="Acranius, Agrypnie, Alestorm, Amorphis, Angelus Apatrida, Any Given Day, Die Apokalyptischen Reiter, Arch Enemy, Avatarium, Beast In Black, Benediction, Benighted, Blind Guardian, Bloodywood, Born From Pain, Brainstorm, Brothers Of Metal, Bury Tomorrow, Caliban, Cannibal Corpse, Combichrist, Comeback Kid, Conjurer, Crisix, Cypecore, Cytotoxin, Dagoba, Dangerface, Dark Funeral, Dark Tranquillity, Death Angel, Debauchery, Distant, Djerv, Eisbrecher, Eisregen, Emil Bulls, Enforced, Ensiferum, Feuerschwanz, Fiddler’s Green, Finntroll, Ghostkid, Gutalax, Hämatom, Haggefugg, Hammer King, Hangman’s Chair, Hatebreed, Heaven Shall Burn, Humanity’s Last Breath, Hypocrisy, Igorrr, Infected Rain, Insomnium, J.B.O., Jinjer, Korpiklaani, Landmvrks, Lik, Lord Of The Lost, Lorna Shore, Lüt, Madball, Mass Hysteria, Mental Cruelty, Misery Index, Mission In Black, Mr. Hurley & Die Pulveraffen, Napalm Death, Necrotted, Omnium Gatherum, Orden Ogan, Parasite Inc., Primal Fear, Seasons In Black, Serenity, Skyeye, Slope, Static X, Thundermother, Vola, Vulture, Warkings, Der Weg einer Freiheit, Within Temptation"
    website="www.summer-breeze.de"
  />
);
