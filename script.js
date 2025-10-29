
    const animals = ["mouse",
            "duck", "horse", "moose", "sheep", "crocodile", "bat",
            "seal", "monkey", "meerkat", "bear", "elephant","gazelle",
            "lion", "tiger", "wolf", "camel", "otter", "chameleon",
            "large white pig", "wild boar", "Nubian goat", "Nigerian goat", "Irish cob",
            "Arabian horse", "okapi", "maned wolf", "fosse", "slow lori", "angora rabbit",
            "axolotl", "bearded vulture", "red panda", "cheetah", "glass frog", "mantis shrimp",
            "sun bear", "aye-aye", "markhor", "saiga antelope", "sloth",
            "pangolin", "gharial", "white tiger", "porcupine", "african crowned crane",
            "african wild dog", "leopard", "bat-eared fox", "bongo", "orangutan", "sea lion", "caracal",
            "giraffe", "rhino", "howler monkey", "mountain lion", "koala", "an arctic fox", "panther",
            "millipede", "aardvark", "Afghan hound", "African civet", "African penguin",
            "armadillo", "baboon", "bison", "brown bear",
            "budgerigar", "capybara", "cassowary", "clownfish", "coati", "common frog",
            "cottontop tamarin", "coyote", "dachshund", "emu", "european hare", "fennec fox", "hammerhead shark",
            "gemsbok", "golden pheasant", "common pheasant", "grasshopper", "pelican", "honey bee", "hoopoe bird", "jackal",
            "king penguin", "komodo dragon", "ladybug", "ring-tailed lemur", "japanese macaque",
            "mountain goat", "tarantula", "opossum", "pine marten", "pirahna", "polar bear", "red squirrel",
            "red fox", "kangaroo", "roborovski hamster", "ibis", "seahorse", "secretary bird", "serval",
            "snow leopard", "hyena", "toucan", "weasel", "wildebeest", "affenpinscher",
            "ainu dog", "airedale terrier", "giant tortoise", "river dolphin", "american bulldog", "clawed frog",
            "angelfish", "ant", "appenzeller dog", "anteater", "arctic hare", "giant hornet", "cattle dog", "australian shepherd",
            "barracuda", "basenji", "basking shark", "basset hound", "bearded dragon", "beaver", "bedlington terrier",
            "bichon frise", "birman", "black russian terrier", "bloodhound", "blue whale", "bluetick coonhound",
            "bombay", "booby", "border collie", "border terrier", "boston terrier",
            "bumblebee", "bullfrog", "bull shark", "bull terrier", "great white shark", "cairn terrier",
            "t-rex", "stegosaurus", "catfish", "dromedary camel", "chamois", "chicken", "chinchilla", "chipmunk",
            "collared peccary", "colossal squid", "cichlid", "cuscus", "darwin's frog", "dhole", "discus",
            "dodo", "dogue de bordeaux", "donkey", "dragonfly", "dormouse", "earwig", "echidna", "emperor tamarin",
            "fishing cat", "flamingo", "fangtooth", "ferret", "gecko", "gila monster", "gopher",
            "grouse", "harpy eagle", "hippopotamus", "heron", "honey badger", "narwhal", "green anole",
            "golden retriever", "lamprey", "kiwi", "mudskipper", "potoo", "mandarin fish", "lovebird",
            "wigeon", "saola", "cuban snail", "bald ibis", "ploughshare tortoise",
            "angel shark", "golden-rumped elephant shrew", "peacock tarantula", "dama gazelle",
            "blue poison dart frog", "golden poison frog", "chinese crested",
            "mimic poison frog", "amazon milk frog", "dyeing dart frog", "phantasmal poison frog", "lilac-breasted roller",
            "swallowtail butterfly", "california red-sided garter snake", "gouldian finch",
            "san francisco garter snake", "emerald tree boa", "jewel bug", "betta fish","amur leopard",
            "vaquita","javan rhino","baiji dolphin","hirola", "fiery-throated hummingbird", "carnotaurus",
            "madagascar pochard", "nile lechwe","zebu","yak", "scarlet macaw","mandarin duck","piebald peacock",
            "rainbow lorikeet", "harlequin tuskfish", "electric blue gecko", "orca",
            "blue morpho butterfly", "red-eyed tree frog", "rainbow trout",
            "leaf insect", "yellow tang", "rainbow bee-eater","blue-ringed octopus", "british timber",
            "pink fairy armadillo", "blue jay", "eurasian jay", "mandarin rat snake",
            "blue gourami", "rainbow wrasse", "scarlet tanager", "green iguana", "mandarin vole",
            "blue-tailed skink", "scarlet ibis", "glossy ibis", "mandarin catfish","ringtail possum",
            "rice weevil", "centipede","cockroach", "mosquito", "philippine eagle",
            "cleaner shrimp", "rain frog", "european badger", "eurasian otter", "wolverine", "stoat",
            "leaf sheep", "ocean angel", "palmato gecko", "muntjac deer", " bare-throated bellbird",
            "king bird-of-paradise", "wilson's bird-of-paradise", "cocker spaniel", "pit bull terrier",
            "java mouse-deer", "blue ridge two-lined salamander", "aardwolf", "numbat", "jack russel terrier", "chihuahua",
            "whippet", "shih tzu", "puli", "german shepherd", "eastern bluebird", "peregrine falcon",
            "pug", "great dane", "schnauzer", "jellyfish", "horseshoe crab", "hedgehog",
            "tyrannosaurus", "triceratops", "parasaurolophus", "harpy", "chimera",
            "allosaurus", "brachiosaurus", "ankylosaurus", "utahraptor", "pterodactylus","spinosaurus", "griffin",
            "leafy sea dragon", "musk deer", "blue glaucus", "goldfinch", "spiny softshell turtle",
            "goldcrest", "common yellowthroat","welcome swallow", "white-throated swift",
            "black vulture", "violet-green swallow", "house finch","yellow-bellied sapsucker", "common moorhen",
            "chimney swift", "silvereye", "Eurasian golden oriole", "pink-eared duck",
            "black-chinned hummingbird", "lazuli bunting", "anna's hummingbird", "green heron",
            "yellow-breasted chat", "chestnut-collared longspur", "yellow-billed cuckoo", "tui", "superb lyrebird",
            "American white pelican","golden tortoise beetle", "Indian painted grasshopper",
            "cairns birdwing", "thorn treehopper", "spiny flower mantis", "European peacock butterfly", "lantern bug",
            "malay lacewing", "rainbow stag beetle", "rosy maple moth", "tailed jay", "pygmy rabbit", "pygmy marmoset", "Etruscan shrew",
            "pekingese", "komondor", "pharaoh hound", "finnish spitz", "saluki", "skye terrier", "beauceron", "azawakh",
            "lundehund", "tibetan mastiff", "chow chow", "mudi", "catahoula", "dandiedinmont terrier", "australian terrier" ,
            "swedish vallhund", "otterhound", "thai ridgeback", "stabyhoun", "karelian bear dog", "briard", "alaskan klee kai",
            "american english coonhound", "english bulldog", "akita", "american akita", "hokkaido", "kai ken", "borzoi",
            "boxer", "bracco italiano", "ca de bou", "cesky terrier", "chesapeake bay retriever", "chongqing", "clumber spaniel",
            "dalmatian", "doberman", "drever", "english setter", "entlebucher mountain dog", "finnish hound", "french bulldog",
            "galgo español", "german pincher", "havanese", "hovawart", "ibizan hound", "irish water spaniel", "jagdterrier",
            "japanese chin", "keeshond", "kishu", "kokoni", "kuvasz", "landseer", "löwchen", "poodle", "markiesje", "kooikerhondje",
            "miniature schnauzer", "giant schnauzer", "buhund", "nova scotia duck tolling retriever", "papillon", "welsh corgi pembroke",
            "welsh corgi cardigan", "petit basset griffon vendeen", "grand basset griffon vendeen", "pomeranian", "portuguese water dog",
            "pumi", "pyrenean mastiff", "rottweiler", "rough collie", "russkiy toy", "saarloos wolfdog", "smooth collie", "tornjak",
            "tosa inu", "toy fox terrier", "weimaraner", "yorkshire terrier", "yakutian laika", "manakin bird", "bowerbird", "emerald toucanet",
            "tufted puffin", "magellanic woodpecker", "red-knobbed hornbill", "hoatzin bird", "kakapo", "vulturine guinea fowl",
            "resplendent quetzal bird","great white pelican", "pampas cat", "oncilla", "kodkod", "marbled cat",
            "indian paradise flycatcher", "bleeding heart pigeon", "lady amherst's pheasant", "ocellated turkey", "great crested grebe",
            "helmeted hornbill", "marabou stork", "scarlet 'i'iwi", "ribbon-tailed astrapia bird", "jacana bird", "king vulture", "canada goose",
            "mute swan", "mallard", "smew bird", "ring-necked pheasant", "hazel grouse", "willow ptarmigan",
            "rock ptarmigan", "western capercaillie", "spotted salamander","eastern long-tailed salamander",
            "black grouse", "common quail", "common wood-pigeon", "common cuckoo", "eurasian coot", "common crane",
            "dunlin bird", "great skua bird", "atlantic puffin", "black-headed gull", "common gull", "great black-backed gull", "arctic loon",
            "buzzard", "barn owl", "ocelot", "cougar", "asian golden cat", "clouded leopard", "andean mountain cat", "margay",
            "bay cat", "bobcat", "canada lynx", "eurasian lynx", "iberian lynx", "jaguarundi", "palla's cat", "rusty spotted cat", "flat-headed cat",
            "jungle cat", "black-footed cat", "sand cat", "ragdoll", "norwegian forest cat", "abyssinian", "egyptian mau", "savannah", "siamese cat",
            "bengal cat", "singapura", "lykoi", "japanese bobtail", "laperm cat", "peterbald", "devon tex", "sphynx", "selkirk rex", "highlander cat",
            "scottish fold", "american curl","exotic shorthair", "manx", "ocicat", "chinchilla cat", "khao manee cat", "ukrainian levkoy cat",
            "balinese", "siberian cat", "munchkin", "maine coon", "russian blue", "turkish van", "sokoke cat", "green basilisk", "flying dragon",
            "armadillo girdled lizard", "thorny devil", "leaf-tailed gecko", "matamata turtle", "panther chameleon", "brazilian rainbow boa",
            "ornate uromastyx lizard", "caiman lizard", "ornate day gecko", "eastern collared lizard", "fiji banded iguana", "tokay gecko",
            "red headed agama", "electric blue day gecko", "cave dwelling rat snake", "broadley's flat lizard", "pied avocet", "northern lapwing",
            "union island gecko", "indo-chinese forest lizard", "asian giant softshell turtle", "blue-tongued skink", "chinese crocodile lizard",
            "flying gecko", "frilled lizard", "malagasy leaf-nosed snake", "marine iguana", "spiny bush viper", "tentacled snake",
            "draco lizard", "borneo earless monitor", "indian star tortoise", "black pond turtle", "leith's softshell turtle", "branderhorst's turtle",
            "parker's snake-necked turtle", "box turtle", "loggerhead sea turtle", "olive ridley sea turtle", "alligator snapping turtle",
            "american crocodile", "dwarf crocodile", "galapagos land iguana", "yucatan spiny-tailed iguana", "northern bahamian rock iguana",
            "emperor flat lizard", "iaraka river leaf chameleon", "antimena chameleon", "jewelled chameleon", "labord's chameleon", "petter's chameleon",
            "bertucci's pygmy chameleon", "red stripe gargoyle gecko", "red-footed tortoise", "leopard gecko",
            "red-spotted salamander", "hissing cockroach", "conehead mantis", "spotted lanternfly", "peacock spider",
            "two-striped jumping spider", "green jumping spider", "bog sun-jumper spider", "glow-worm", "green lacewing", "new forest cicada",
            "red fire and", "ruby-tailed wasp", "scarce emerald damselfly", "spiky yellow woodlouse", "tansy beetle", "beddau beast",
            "sabre wasp", "vicky's ground spider", "violet ground beetle", "violet oil beetle", "wasp spider", "zircon reed beetle",
            "orchid mantis", "goliath stick insect", "glasswing butterfly", "trap-jaw ant", "hummingbird hawk-moth", "whip spider",
            "leafcutter ant", "spiny flower mantis", "atlas moth caterpillar", "comet moth", "feather-horned beetle", "wasp mantis fly",
            "puss moth caterpillar", "jeweled  flower mantis", "gooty sapphire tarantula", "lichen katydid", "peppermint stick insect",
            "helicopter damselfly", "glassy winged sharpshooter", "hickory horned devil", "spiny orb-weaver", "white ghost cicada",
            "stinging rose caterpillar", "stinging rose moth", "blue milkweed beetle", "panda ant", "spiny devil katydid", "white with moth",
            "frosted flatid planthopper", "white plumed moth", "emerald cockroach wasp", "antlion", "blue weevil beetle", "malaysian dead leaf mantis",
            "blue death-feigning beetle", "indian leaf butterfly", "saddleback caterpillar", "spiny oak slug caterpillar", "io moth",
            "blue morpho caterpillar", "pink underwing moth caterpillar", "red-humped caterpillar", "cinnabar moth caterpillar",
            "glass jewel caterpillar", "sycamore moth caterpillar", "brahmin moth caterpillar", "mirror spider", "green lynx spider",
            "brazilian jewel tarantula", "mexican red-knee tarantula", "housefly", "aphid", "small tortoiseshell butterfly", "common brimstone butterfly",
            "mourning cloak butterfly", "minstrel bug", "roesel's bush-cricker", "hoverfly"];

    const extras = [
      "unicorn horn", "nose horn", "reindeer antlers", "long eyelashes", 
      "huge ears", "cactus spikes", "huge eyes","piebaldism", "antennae", "moose antlers", 
      "bee stinger", "glowing eyes", "iridescence", "long whiskers", "fangs", "extra eyes",
      "sheep horns", "albinism", "melanism", "antlers", "spines along the back", "bioluminescent", 
      "winter coat/summer coat", "erythrism","heterochromia", "leucism", "xanthochromish", 
      "juvenile", "hairless", "embedded gems", "plants", "mushrooms","none", "none", "none", "none"
    ];

    // 🕷️ Trigger words for warning
    const arachnidTriggers = [
      "spider", "tarantula", "whip spider", "arachnid",
      "scorpion", "centipede", "millipede", "tick", "mite"
    ];

    function showArachnophobiaWarning(animal) {
      document.getElementById("warningOverlay").style.display = "flex";
      console.warn("⚠️ Arachnophobia Warning Triggered for:", animal);
    }

    function closeWarning() {
      document.getElementById("warningOverlay").style.display = "none";
    }

    function checkForArachnids(animal) {
      return arachnidTriggers.some(trigger => animal.toLowerCase().includes(trigger));
    }

    function generateAnimalWithAnimation(index) {
      const button = document.querySelector(`button[onclick='generateAnimalWithAnimation(${index})']`);
      const element = document.getElementById(`num${index}`);
      button.disabled = true;
      let count = 0;
      const interval = setInterval(() => {
        const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        element.textContent = randomAnimal;
        count++;
        if (count > 20) {
          clearInterval(interval);
          const finalAnimal = animals[Math.floor(Math.random() * animals.length)];
          element.textContent = finalAnimal;
          button.disabled = false;
          if (checkForArachnids(finalAnimal)) showArachnophobiaWarning(finalAnimal);
        }
      }, 20);
    }

    function generateExtraWithAnimation(index) {
      const button = document.querySelector(`button[onclick='generateExtraWithAnimation(${index})']`);
      const element = document.getElementById(`num${index}`);
      button.disabled = true;
      let count = 0;
      const interval = setInterval(() => {
        const randomExtra = extras[Math.floor(Math.random() * extras.length)];
        element.textContent = randomExtra;
        count++;
        if (count > 20) {
          clearInterval(interval);
          const finalExtra = extras[Math.floor(Math.random() * extras.length)];
          element.textContent = finalExtra;
          button.disabled = false;
        }
      }, 20);
    }
