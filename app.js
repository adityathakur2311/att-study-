const chapters = [
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Physical World",topics:[
["Scope of Physics","Physics studies the basic laws of nature, from subatomic particles to galaxies. It connects observations with mathematical models and experiments."],
["Fundamental forces","The four fundamental interactions are gravitational, electromagnetic, strong nuclear and weak nuclear forces. They explain motion, light, atomic structure and nuclear processes."],
["Physics, technology and society","Scientific ideas often lead to technologies, while new instruments and technologies also help scientists test ideas. Models are improved when evidence requires it."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Units and Measurements",topics:[
["Physical quantities and SI units","A physical quantity is expressed as a numerical value multiplied by a unit. SI base units include metre (m), kilogram (kg), second (s), ampere (A), kelvin (K), mole (mol) and candela (cd)."],
["Dimensions and dimensional analysis","Dimensions show how a quantity depends on base quantities. For example, velocity has dimension [LT⁻¹] and force has [MLT⁻²]. Dimensional analysis checks equation consistency but cannot determine dimensionless constants."],
["Significant figures","Significant figures communicate measurement precision. In multiplication or division, the result is usually reported with the same number of significant figures as the least precise input."],
["Errors and uncertainty","Random errors vary unpredictably; systematic errors shift measurements in a consistent way. Repeating measurements, calibrating instruments and reporting uncertainty improve reliability."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Motion in a Straight Line",topics:[
["Position, distance and displacement","Position identifies location relative to an origin. Distance is total path length and is scalar; displacement is the change in position and has direction. Their magnitudes are equal only for straight motion without reversal."],
["Speed and velocity","Average speed equals total distance divided by total time. Average velocity equals displacement divided by elapsed time. Instantaneous velocity is the rate of change of position."],
["Acceleration","Acceleration is the rate of change of velocity. It may be positive, negative or zero depending on the chosen axis and the change in velocity; negative acceleration does not always mean slowing down."],
["Equations of uniformly accelerated motion","For constant acceleration: v = u + at; s = ut + ½at²; v² = u² + 2as. Here u is initial velocity, v final velocity, a acceleration, t time and s displacement. Choose a consistent sign convention."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Motion in a Plane",topics:[
["Vectors","A vector has magnitude and direction. Components in perpendicular axes are Aₓ = A cosθ and Aᵧ = A sinθ when θ is measured from the positive x-axis."],
["Projectile motion","Ignoring air resistance, horizontal acceleration is zero and vertical acceleration is −g. For launch speed u at angle θ: time of flight T = 2u sinθ/g, maximum height H = u²sin²θ/(2g), and range R = u²sin2θ/g on level ground."],
["Uniform circular motion","In circular motion, velocity direction changes continuously. Centripetal acceleration points toward the centre and has magnitude v²/r = ω²r. The inward acceleration does not mean a separate outward force is acting."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Laws of Motion",topics:[
["Newton’s laws","First law describes inertia. Second law gives net force F = dp/dt, or F = ma for constant mass. Third law says interaction forces are equal in magnitude and opposite in direction, acting on different bodies."],
["Free-body diagrams","Isolate one object and draw only forces acting on it: weight, normal force, tension, friction and applied forces as appropriate. Then resolve forces along convenient axes and apply ΣF = ma."],
["Friction","Static friction adjusts up to a maximum μₛN; kinetic friction is often modelled as μₖN. Friction opposes relative motion or its tendency, not necessarily the object's overall direction of travel."],
["Circular dynamics","For circular motion, the net inward force is mv²/r. This is the required resultant of real forces such as tension, gravity or friction, not an additional force to add separately."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Work, Energy and Power",topics:[
["Work","For a constant force, work W = F s cosθ. Work is positive when force has a component along displacement, negative when opposite, and zero when perpendicular."],
["Kinetic and potential energy","Kinetic energy is K = ½mv². Near Earth's surface, gravitational potential-energy change is ΔU = mgΔh. Only changes in potential energy matter in many problems."],
["Work-energy theorem","Net work on an object equals its change in kinetic energy: Wnet = Kf − Ki. It is often simpler than solving acceleration and time separately."],
["Power and conservation","Average power is W/Δt; instantaneous power for a force is P = F·v. Mechanical energy is conserved when only conservative forces do work; non-conservative work changes mechanical energy."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"System of Particles and Rotational Motion",topics:[
["Centre of mass","For particles on a line, xCOM = Σmᵢxᵢ/Σmᵢ. The centre of mass moves as if the total external force acts on the total mass."],
["Torque and angular momentum","Torque magnitude is τ = rF sinθ. For a fixed axis, τnet = Iα. Angular momentum is conserved when net external torque is zero."],
["Moment of inertia","Moment of inertia I = Σmᵢrᵢ² for discrete masses and depends on the axis. Rotational kinetic energy is ½Iω². The parallel-axis theorem is I = ICOM + Md²."],
["Rolling motion","For rolling without slipping, vCOM = Rω. Total kinetic energy combines translation and rotation: ½Mv² + ½Iω²."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Gravitation",topics:[
["Newton's law of gravitation","Two masses attract with F = Gm₁m₂/r² along the line joining their centres. The force is always attractive in Newtonian gravity."],
["Gravitational field and potential","Field strength for a spherical mass outside it is g = GM/r². Gravitational potential is V = −GM/r when zero is chosen at infinity; potential energy is U = mV."],
["Satellites and escape speed","For a circular orbit, orbital speed v = √(GM/r). Escape speed from distance r is √(2GM/r), neglecting atmosphere and rotation."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Mechanical Properties of Solids",topics:[
["Stress and strain","Stress is restoring force per area; longitudinal strain is change in length divided by original length. Within the elastic limit, stress is proportional to strain for many materials."],
["Elastic moduli","Young's modulus Y = longitudinal stress/longitudinal strain. Bulk modulus relates pressure change to fractional volume change; shear modulus relates shear stress to shear strain."],
["Elastic energy","For a linearly elastic spring, stored energy is ½kx². The energy is recoverable when the material returns to its original state within its elastic limit."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Mechanical Properties of Fluids",topics:[
["Pressure and Pascal's law","Pressure is normal force per area. In a fluid at rest, pressure increases with depth: p = p₀ + ρgh. A pressure change applied to an enclosed fluid is transmitted throughout it."],
["Buoyancy","An immersed body experiences an upward buoyant force equal to the weight of displaced fluid. Floating equilibrium requires buoyant force to balance the object's weight."],
["Continuity and Bernoulli","For incompressible steady flow, Av is constant in a pipe. Along a streamline for ideal flow, p + ½ρv² + ρgh is constant."],
["Viscosity and surface tension","Viscosity describes resistance to fluid flow. Surface tension arises from cohesive forces at a liquid surface and tends to reduce surface area."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Thermal Properties of Matter",topics:[
["Temperature and heat","Temperature indicates thermal state; heat is energy transferred due to temperature difference. Thermal equilibrium underlies the zeroth law."],
["Expansion and calorimetry","For small temperature changes, linear expansion ΔL = αL₀ΔT. Heat exchanged without phase change is Q = mcΔT; during a phase change, Q = mL."],
["Heat transfer","Conduction transfers energy through interactions in matter, convection through bulk fluid motion, and radiation through electromagnetic waves."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Thermodynamics",topics:[
["Thermal equilibrium and state variables","Pressure, volume and temperature describe a thermodynamic state. A process is a path between states; heat and work depend on the path, while internal energy is a state function."],
["First law","Using the convention that W is work done by the system, ΔQ = ΔU + W. Always check the sign convention used in a question."],
["Processes and second law","In an isochoric process, volume is constant; in an isobaric process, pressure is constant; in an isothermal process, temperature is constant. The second law constrains the direction of spontaneous processes and heat-engine efficiency."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Kinetic Theory",topics:[
["Molecular model","A gas is modelled as many molecules in random motion with negligible intermolecular forces except during collisions in the ideal-gas approximation."],
["Pressure and temperature","For an ideal gas, pV = nRT. Average translational kinetic energy per molecule is 3kBT/2, linking temperature to microscopic motion."],
["Degrees of freedom","Energy is distributed among accessible quadratic degrees of freedom. Equipartition gives ½kBT per degree of freedom under classical conditions."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Oscillations",topics:[
["Simple harmonic motion","SHM occurs when acceleration is proportional to displacement from equilibrium and directed toward equilibrium: a = −ω²x."],
["SHM equations","For x = A cos(ωt + φ), velocity is v = −Aω sin(ωt + φ), and acceleration is −ω²x. Period T = 2π/ω."],
["Spring and pendulum","For an ideal mass-spring system, T = 2π√(m/k). For a simple pendulum at small angle, T = 2π√(L/g)."]]},
{subject:"Physics",path:["CBSE","JEE","NEET"],name:"Waves",topics:[
["Wave quantities","Wavelength λ is the distance between matching phase points, frequency f is cycles per second, and wave speed v = fλ."],
["Superposition and standing waves","When waves overlap, displacements add. Standing waves form from opposite-travelling waves and have nodes and antinodes."],
["Sound waves","Sound in air is longitudinal. Resonance occurs when driving frequency matches a natural frequency, producing a larger response."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Some Basic Concepts of Chemistry",topics:[
["Matter and chemical laws","Matter is made of atoms, molecules or ions. Conservation of mass, definite proportions and multiple proportions describe regularities in chemical reactions."],
["Mole concept","One mole contains Avogadro's constant, approximately 6.022×10²³ specified entities. Amount n = mass/molar mass; particle count N = nNₐ."],
["Stoichiometry","Balance the chemical equation first, convert given quantities to moles, use coefficient ratios, and convert to the requested unit. The limiting reagent is consumed first and determines maximum product."],
["Concentration","Molarity M = moles of solute/litres of solution. For dilution with no solute loss, M₁V₁ = M₂V₂."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Structure of Atom",topics:[
["Subatomic particles and models","Atoms contain protons, neutrons and electrons. Rutherford's scattering experiment revealed a small dense nucleus; Bohr's model explains hydrogen's line spectrum using quantised energy levels."],
["Quantum numbers","The principal quantum number n specifies shell/energy scale; l specifies subshell shape; mₗ specifies orbital orientation; mₛ is electron spin."],
["Orbitals and electron configuration","Orbitals are probability distributions, not fixed paths. Aufbau, Pauli exclusion and Hund's rule guide ground-state electron configurations, with some known exceptions."],
["Light and energy","Photon energy E = hν = hc/λ. Higher frequency means higher photon energy and shorter wavelength."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Classification of Elements and Periodicity",topics:[
["Modern periodic law","Element properties show periodic trends when elements are arranged by increasing atomic number."],
["Atomic and ionic radii","Across a period, effective nuclear charge generally increases and atomic radius tends to decrease. Down a group, additional shells usually increase radius."],
["Ionisation enthalpy and electronegativity","Ionisation enthalpy generally increases across a period and decreases down a group, with exceptions due to subshell structure and electron pairing. Electronegativity describes attraction for shared electrons in a bond."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Chemical Bonding and Molecular Structure",topics:[
["Ionic and covalent bonding","Ionic bonding involves electrostatic attraction between ions; covalent bonding involves shared electron pairs. Actual bonding often has mixed character."],
["Lewis structures and formal charge","Count valence electrons, draw bonds and lone pairs, and check octets where applicable. Formal charge = valence electrons − nonbonding electrons − ½(bonding electrons)."],
["VSEPR and hybridisation","Electron domains repel and arrange to reduce repulsion. Molecular shape depends on bonding and lone pairs. Hybridisation is a model for combining atomic orbitals to describe bonding."],
["Molecular orbital theory","Atomic orbitals combine into bonding and antibonding molecular orbitals. Bond order = ½(Nbonding − Nantibonding)."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Chemical Thermodynamics",topics:[
["System and surroundings","A system is the part under study; surroundings are everything else. Open systems exchange matter and energy, closed systems exchange energy but not matter, and isolated systems exchange neither."],
["Enthalpy and internal energy","At constant pressure, heat exchanged equals enthalpy change when only pressure-volume work is involved. Hess's law follows because enthalpy is a state function."],
["Entropy and spontaneity","Entropy measures energy dispersal/microstate multiplicity. For a spontaneous process, total entropy of system plus surroundings increases. Gibbs energy at constant T and p is ΔG = ΔH − TΔS."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Equilibrium",topics:[
["Dynamic equilibrium","In a closed reversible system at equilibrium, forward and reverse rates are equal; concentrations remain constant but reactions continue microscopically."],
["Equilibrium constants","For a balanced reaction, Kc is built from equilibrium concentrations raised to stoichiometric powers; pure solids and liquids are omitted. The reaction quotient Q predicts the direction of net change."],
["Le Chatelier's principle","A system at equilibrium shifts in response to a change in concentration, pressure or temperature in a way that partially opposes that change. A catalyst changes the rate of reaching equilibrium, not K."],
["Acid-base equilibrium","pH = −log₁₀[H⁺] for dilute aqueous solutions under the usual approximation. Ka and Kb quantify acid and base ionisation; buffers resist pH changes."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Redox Reactions",topics:[
["Oxidation numbers","Oxidation number is a bookkeeping tool for electron distribution. The sum of oxidation numbers equals the species' total charge."],
["Oxidation and reduction","Oxidation is loss of electrons/increase in oxidation number; reduction is gain of electrons/decrease in oxidation number. They occur together."],
["Balancing redox equations","Use oxidation-number changes or the half-reaction method. Balance atoms and charge, then verify both mass and charge conservation."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Organic Chemistry: Basic Principles",topics:[
["Representations and nomenclature","Organic structures can be written as expanded, condensed or skeletal formulas. IUPAC naming identifies the parent chain, principal functional group, substituents and their locants."],
["Isomerism","Structural isomers differ in connectivity; stereoisomers have the same connectivity but differ in spatial arrangement. Isomerism can cause different physical and chemical properties."],
["Electronic effects","Inductive effects operate through sigma bonds; resonance delocalises electrons; hyperconjugation involves interaction with adjacent sigma bonds. These help explain stability and reactivity."],
["Reaction intermediates","Carbocations are electron-deficient positively charged species; carbanions carry a negative charge; radicals have an unpaired electron. Stability depends on structure and surrounding groups."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Hydrocarbons",topics:[
["Alkanes","Alkanes are saturated hydrocarbons with general formula CₙH₂ₙ₊₂ for open chains. They commonly undergo combustion and substitution reactions."],
["Alkenes and alkynes","Multiple bonds contain sigma and pi bonds. Alkenes commonly undergo addition reactions; alkynes can undergo sequential additions."],
["Aromatic hydrocarbons","Benzene has a delocalised pi system and unusual stability. It commonly undergoes electrophilic substitution while retaining aromaticity."],
["Reaction prediction","For exam problems, identify the functional unsaturation, reagent and conditions, then consider regioselectivity and stability of intermediates."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"States of Matter",topics:[
["Gas laws","Boyle's law gives pV = constant at fixed T and amount; Charles's law gives V/T = constant at fixed p. Combined as pV = nRT for an ideal gas."],
["Kinetic molecular theory","Ideal-gas pressure arises from molecular collisions with container walls. Real gases deviate at high pressure and low temperature when molecular size and attractions matter."],
["Intermolecular forces","Dispersion forces occur in all particles; dipole-dipole forces act between permanent dipoles; hydrogen bonding is a strong, directional interaction when suitable H–N/O/F bonds occur."]]},
{subject:"Chemistry",path:["CBSE","JEE","NEET"],name:"Hydrogen",topics:[
["Isotopes and preparation","Hydrogen has protium, deuterium and tritium isotopes. Laboratory preparation and industrial production depend on reactants and conditions."],
["Hydrides","Ionic, covalent and metallic hydrides differ in bonding and properties. Their behaviour depends on the elements involved."],
["Water and hydrogen peroxide","Water's polarity and hydrogen bonding explain many properties. Hydrogen peroxide acts as an oxidising agent and can also act as a reducing agent in suitable reactions."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Sets",topics:[
["Set notation and subsets","A set is a well-defined collection. A ⊆ B means every element of A is in B. The power set P(A) contains all subsets and has 2ⁿ elements when A has n elements."],
["Operations","Union A∪B includes elements in either set; intersection A∩B includes common elements; complement contains elements in the universal set but not A."],
["Counting formula","For finite sets, n(A∪B)=n(A)+n(B)−n(A∩B). For three sets, use inclusion-exclusion with pairwise intersections and add back the triple intersection."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Relations and Functions",topics:[
["Cartesian product and relations","A×B is the set of ordered pairs (a,b). A relation from A to B is a subset of A×B."],
["Domain, codomain and range","The domain is the allowed input set; codomain is the declared target set; range is the set of outputs actually obtained."],
["Types of functions","A function assigns exactly one output to each input. Injective means distinct inputs have distinct outputs; surjective means every codomain element is reached; bijective means both."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Trigonometric Functions",topics:[
["Radians and angles","A radian is the angle subtended by an arc equal in length to the radius. Convert degrees to radians by multiplying by π/180."],
["Identities","Core identities include sin²x + cos²x = 1, 1 + tan²x = sec²x, and 1 + cot²x = cosec²x where defined."],
["Graphs and periodicity","Sine and cosine have period 2π; tangent has period π. Use symmetry, periodicity and reference angles to simplify expressions and solve equations."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Complex Numbers and Quadratic Equations",topics:[
["Imaginary unit","The imaginary unit i satisfies i² = −1. A complex number is z = a + ib, with real part a and imaginary part b."],
["Modulus and conjugate","For z=a+ib, |z|=√(a²+b²) and conjugate z̄=a−ib. Their product z z̄ = |z|²."],
["Quadratic roots","For ax²+bx+c=0, roots are (−b±√(b²−4ac))/(2a). The discriminant determines whether real roots are distinct, equal or non-real."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Permutations and Combinations",topics:[
["Fundamental counting principle","If one step can occur in m ways and another independent step in n ways, the combined process can occur in mn ways."],
["Permutations","Arrangements of r objects chosen from n distinct objects: nPr = n!/(n−r)!."],
["Combinations","Selections where order does not matter: nCr = n!/[r!(n−r)!]. Also nCr = nC(n−r)."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Binomial Theorem",topics:[
["Expansion","For a non-negative integer n, (a+b)ⁿ = Σ from r=0 to n of nCr aⁿ⁻ʳbʳ."],
["General term","The (r+1)th term is Tᵣ₊₁ = nCr aⁿ⁻ʳbʳ. Identify r carefully when a particular term is requested."],
["Middle term","If n is even, there is one middle term T(n/2)+1; if n is odd, there are two middle terms."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Sequences and Series",topics:[
["Arithmetic progression","An AP has constant common difference d. nth term aₙ=a+(n−1)d and sum Sₙ=n/2[2a+(n−1)d]."],
["Geometric progression","A GP has constant ratio r. nth term aₙ=arⁿ⁻¹; for r≠1, Sₙ=a(rⁿ−1)/(r−1). For |r|<1, infinite sum is a/(1−r)."],
["Means and series","Arithmetic mean of a and b is (a+b)/2; geometric mean for positive a,b is √ab. Check conditions before applying formulas."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Straight Lines",topics:[
["Slope","Slope m=(y₂−y₁)/(x₂−x₁) when x₂≠x₁. A vertical line has undefined slope."],
["Forms of line","Point-slope form is y−y₁=m(x−x₁); slope-intercept form is y=mx+c; general form is Ax+By+C=0."],
["Distance and angle","Distance from (x₁,y₁) to Ax+By+C=0 is |Ax₁+By₁+C|/√(A²+B²). For slopes m₁,m₂, tanθ=|(m₂−m₁)/(1+m₁m₂)| when defined."]]},
{subject:"Mathematics",path:["CBSE","JEE"],name:"Limits and Derivatives",topics:[
["Idea of a limit","A limit describes the value a function approaches as x approaches a point; it need not equal the function's value at that point."],
["Standard limits","Important limits include lim(x→0) sin x/x = 1 and lim(x→0) (1−cos x)/x² = 1/2, with angles in radians."],
["Derivative rules","Derivative represents instantaneous rate of change. d(xⁿ)/dx=nxⁿ⁻¹; product rule (uv)'=u'v+uv'; chain rule differentiates a composite function."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"The Living World",topics:[
["Characteristics of life","Living systems show cellular organisation, metabolism, growth, response to stimuli and reproduction at the species level. No single visible feature alone perfectly separates every living and non-living case."],
["Taxonomy and systematics","Taxonomy involves identification, nomenclature and classification. Systematics also studies evolutionary relationships."],
["Scientific naming","Binomial nomenclature uses a genus name followed by a specific epithet. Genus begins with a capital letter; the specific epithet is lowercase; both are italicised in print."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"Biological Classification",topics:[
["Five-kingdom overview","The traditional five-kingdom system groups organisms as Monera, Protista, Fungi, Plantae and Animalia using cellular organisation, nutrition and other features. Modern classification also uses molecular evidence."],
["Bacteria and archaea","Prokaryotes lack a membrane-bound nucleus. Bacteria show diverse nutrition and metabolism; archaea have distinctive molecular features and include organisms from varied environments."],
["Protists and fungi","Protists are a diverse group of mostly unicellular eukaryotes. Fungi are absorptive heterotrophs with chitin-containing cell walls and commonly reproduce by spores."],
["Viruses and lichens","Viruses replicate only inside host cells. Lichens are a close association between a fungus and a photosynthetic partner, often an alga or cyanobacterium."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"Plant Kingdom",topics:[
["Algae","Algae range from unicellular forms to large seaweeds. They are photosynthetic and important in aquatic food webs and oxygen production."],
["Bryophytes and pteridophytes","Bryophytes lack true vascular tissue and need water for fertilisation. Pteridophytes have vascular tissue and reproduce by spores rather than seeds."],
["Gymnosperms and angiosperms","Gymnosperms bear naked seeds, commonly on cones. Angiosperms are flowering plants whose seeds develop within fruits."],
["Life cycles","Plant life cycles show alternation of generations between haploid gametophyte and diploid sporophyte phases; the dominant phase differs among groups."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"Animal Kingdom",topics:[
["Basis of classification","Animal groups are compared by level of organisation, symmetry, germ layers, coelom, segmentation and notochord."],
["Major invertebrate groups","Porifera have pores and canal systems; cnidarians possess specialised stinging cells; annelids are segmented; arthropods have jointed appendages; molluscs often have a mantle and muscular foot."],
["Chordates and vertebrates","Chordates have a notochord at some stage, a dorsal hollow nerve cord and pharyngeal slits. Vertebrates possess a vertebral column and a more developed internal skeleton."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"Cell: The Unit of Life",topics:[
["Cell theory","Cell theory states that organisms consist of cells, the cell is the basic unit of life, and cells arise from pre-existing cells."],
["Prokaryotic and eukaryotic cells","Prokaryotes lack a membrane-bound nucleus; eukaryotes contain a nucleus and membrane-bound organelles. Both have a plasma membrane, genetic material and ribosomes."],
["Organelles","Mitochondria carry out much aerobic respiration; chloroplasts perform photosynthesis in plants and algae; ribosomes synthesise proteins; the Golgi apparatus modifies and packages materials."],
["Membrane transport","Diffusion moves particles down a concentration gradient; facilitated diffusion uses membrane proteins without direct energy input; active transport can move substances against gradients using energy."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"Biomolecules",topics:[
["Carbohydrates and lipids","Carbohydrates provide energy and structural materials. Lipids store energy, form membranes and include signalling molecules."],
["Proteins","Proteins are amino-acid polymers linked by peptide bonds. Their sequence and folding determine structure and function; temperature and pH can disrupt structure."],
["Nucleic acids and enzymes","DNA stores hereditary information and RNA has roles in gene expression. Enzymes lower activation energy, are substrate-specific to varying degrees, and are affected by temperature, pH and concentration."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"Cell Cycle and Cell Division",topics:[
["Cell cycle","The cell cycle includes interphase (G1, S, G2) and M phase. DNA replication occurs during S phase."],
["Mitosis","Mitosis separates duplicated chromosomes to form two genetically similar daughter nuclei, supporting growth, repair and asexual reproduction."],
["Meiosis","Meiosis includes two divisions after one DNA replication, reducing chromosome number and promoting variation through crossing over and independent assortment."]]},
{subject:"Biology",path:["CBSE","NEET"],name:"Plant Physiology: Photosynthesis",topics:[
["Light reactions","Photosystems capture light energy. Electron transport creates a proton gradient used to make ATP; water splitting releases oxygen and provides electrons in oxygenic photosynthesis."],
["Calvin cycle","The Calvin cycle fixes carbon dioxide using RuBisCO and uses ATP and NADPH to produce carbohydrate precursors. It occurs in the chloroplast stroma."],
["C3, C4 and CAM pathways","C3 plants initially form a three-carbon product. C4 plants concentrate CO₂ spatially to reduce photorespiration; CAM plants separate initial CO₂ capture and the Calvin cycle by time."]]}
];

const questions = [
{exam:"JEE",subject:"Physics",difficulty:"Easy",chapter:"Units and Measurements",q:"The dimensional formula of force is:",options:["[MLT⁻²]","[ML²T⁻²]","[ML⁻¹T⁻²]","[M⁰LT⁻¹]"],answer:0,explain:"Force = mass × acceleration. Dimensions are M × LT⁻² = [MLT⁻²]."},
{exam:"JEE",subject:"Physics",difficulty:"Easy",chapter:"Motion in a Straight Line",q:"A body starts from rest and accelerates at 2 m/s² for 3 s. Its final speed is:",options:["3 m/s","5 m/s","6 m/s","9 m/s"],answer:2,explain:"Use v = u + at = 0 + 2×3 = 6 m/s."},
{exam:"JEE",subject:"Physics",difficulty:"Medium",chapter:"Work, Energy and Power",q:"The kinetic energy of a 2 kg object moving at 3 m/s is:",options:["3 J","6 J","9 J","18 J"],answer:2,explain:"K = ½mv² = ½×2×9 = 9 J."},
{exam:"JEE",subject:"Chemistry",difficulty:"Easy",chapter:"Some Basic Concepts of Chemistry",q:"One mole contains approximately:",options:["6.022×10²⁰ entities","6.022×10²³ entities","3.011×10²³ entities","1.00×10²³ entities"],answer:1,explain:"Avogadro's constant is approximately 6.022×10²³ per mole."},
{exam:"JEE",subject:"Chemistry",difficulty:"Medium",chapter:"Structure of Atom",q:"The energy of a photon is directly proportional to its:",options:["Wavelength","Frequency","Speed in vacuum squared","Amplitude only"],answer:1,explain:"E = hν, so photon energy is proportional to frequency."},
{exam:"JEE",subject:"Mathematics",difficulty:"Easy",chapter:"Sets",q:"If n(A)=5, n(B)=4 and n(A∩B)=2, then n(A∪B) is:",options:["7","9","11","2"],answer:0,explain:"n(A∪B)=n(A)+n(B)−n(A∩B)=5+4−2=7."},
{exam:"JEE",subject:"Mathematics",difficulty:"Medium",chapter:"Permutations and Combinations",q:"The value of 5P2 is:",options:["10","20","25","60"],answer:1,explain:"5P2 = 5!/(5−2)! = 5×4 = 20."},
{exam:"NEET",subject:"Biology",difficulty:"Easy",chapter:"The Living World",q:"The basic unit of classification is generally the:",options:["Family","Order","Species","Kingdom"],answer:2,explain:"Species is the basic unit of biological classification."},
{exam:"NEET",subject:"Biology",difficulty:"Easy",chapter:"Cell: The Unit of Life",q:"Which organelle is the main site of aerobic respiration in eukaryotic cells?",options:["Golgi apparatus","Mitochondrion","Ribosome","Lysosome"],answer:1,explain:"Mitochondria are the main site of aerobic respiration in eukaryotic cells."},
{exam:"NEET",subject:"Biology",difficulty:"Medium",chapter:"Biomolecules",q:"Enzymes generally speed up reactions by:",options:["Increasing activation energy","Lowering activation energy","Changing the equilibrium constant","Being consumed permanently"],answer:1,explain:"Enzymes provide an alternative pathway with lower activation energy."},
{exam:"NEET",subject:"Physics",difficulty:"Easy",chapter:"Motion in a Plane",q:"In ideal projectile motion, horizontal acceleration is:",options:["g","−g","Zero","Dependent on launch speed"],answer:2,explain:"Neglecting air resistance, gravity acts vertically, so horizontal acceleration is zero."},
{exam:"NEET",subject:"Chemistry",difficulty:"Easy",chapter:"Chemical Bonding and Molecular Structure",q:"A covalent bond is primarily formed by:",options:["Sharing electron pair(s)","Complete loss of all electrons","Sharing protons","Transfer of neutrons"],answer:0,explain:"A covalent bond involves shared electron pair(s) between atoms."}
];

const formulas = {
Physics:[["Uniform acceleration","v = u + at","Final velocity after time t."],["Displacement","s = ut + ½at²","For constant acceleration."],["Newton's second law","F = ma","For constant mass."],["Kinetic energy","K = ½mv²","Translational kinetic energy."],["Circular acceleration","a = v²/r = ω²r","Directed toward the centre."],["Wave speed","v = fλ","Frequency × wavelength."]],
Chemistry:[["Moles","n = m / M","Mass divided by molar mass."],["Ideal gas","pV = nRT","Ideal-gas equation."],["Molarity","M = n / V(L)","Moles per litre of solution."],["Photon energy","E = hν = hc/λ","Energy of a photon."],["Gibbs energy","ΔG = ΔH − TΔS","At fixed temperature and pressure."],["pH","pH = −log₁₀[H⁺]","Usual dilute-solution approximation."]],
Mathematics:[["Quadratic roots","x = (−b ± √(b²−4ac))/(2a)","For ax²+bx+c=0, a≠0."],["AP nth term","aₙ = a + (n−1)d","Common difference d."],["Combination","nCr = n!/[r!(n−r)!]","Selection where order does not matter."],["Derivative power rule","d(xⁿ)/dx = nxⁿ⁻¹","For real/integer n where defined."],["Trigonometric identity","sin²x + cos²x = 1","Fundamental identity."],["Straight-line slope","m = (y₂−y₁)/(x₂−x₁)","When x₂ ≠ x₁."]]
};

let score = Number(localStorage.getItem("ts_score") || 0);
let player = localStorage.getItem("ts_player") || "";
let activeQuestions = [], questionIndex = 0, answered = false, currentSubjectFormula = "Physics";
const $ = id => document.getElementById(id);
$("year").textContent = new Date().getFullYear();
$("pointsDisplay").textContent = score;
$("playerName").value = player;

$("menuBtn").addEventListener("click",()=>$("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>$("nav").classList.remove("open")));

function renderChapters(){
 const search=$("searchNotes").value.toLowerCase(), subj=$("subjectFilter").value, path=$("pathFilter").value;
 const list=chapters.filter(c=>(subj==="all"||c.subject===subj)&&(path==="all"||c.path.includes(path))&&(c.name.toLowerCase().includes(search)||c.topics.some(t=>t[0].toLowerCase().includes(search))));
 $("chapterList").innerHTML=list.map(c=>`<button class="chapter-item" data-name="${escapeHtml(c.name)}"><b>${escapeHtml(c.name)}</b><small>${c.subject} · ${c.topics.length} topics · ${c.path.join(" / ")}</small></button>`).join("")||"<p class='small'>No matching chapters found.</p>";
 document.querySelectorAll(".chapter-item").forEach(btn=>btn.addEventListener("click",()=>openChapter(btn.dataset.name)));
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function openChapter(name){
 const c=chapters.find(x=>x.name===name); if(!c)return;
 document.querySelectorAll(".chapter-item").forEach(b=>b.classList.toggle("active",b.dataset.name===name));
 $("noteDetail").innerHTML=`<span class="eyebrow">${c.subject.toUpperCase()} · ${c.path.join(" / ")}</span><h3>${escapeHtml(c.name)}</h3><p>Study each concept, then explain it in your own words and solve questions without looking at the notes.</p><div class="callout"><b>How to study this chapter:</b> Read one topic → write key terms/formulas → practise 3–5 questions → revisit mistakes.</div>${c.topics.map((t,i)=>`<div class="topic"><h4>${i+1}. ${escapeHtml(t[0])}</h4><p>${escapeHtml(t[1])}</p></div>`).join("")}<div class="callout"><b>Revision task:</b> Make a short summary of each topic and list any doubts to ask your teacher.</div>`;
}
["searchNotes","subjectFilter","pathFilter"].forEach(id=>$(id).addEventListener(id==="searchNotes"?"input":"change",renderChapters));
renderChapters();

function fillPracticeSubjects(){
 const exam=$("examSelect").value;
 const subjects=exam==="JEE"?["Physics","Chemistry","Mathematics"]:["Physics","Chemistry","Biology"];
 $("practiceSubject").innerHTML=subjects.map(s=>`<option>${s}</option>`).join("");
}
$("examSelect").addEventListener("change",fillPracticeSubjects); fillPracticeSubjects();

$("startQuiz").addEventListener("click",()=>{
 const exam=$("examSelect").value, subject=$("practiceSubject").value, diff=$("difficulty").value;
 const filtered=questions.filter(q=>q.exam===exam&&q.subject===subject&&(diff==="All"||q.difficulty===diff));
 // Keep every practice test at 25 questions. If the selected subject/difficulty
 // has a small starter pool, broaden to the selected exam before reusing items.
 const examPool=questions.filter(q=>q.exam===exam&&(diff==="All"||q.difficulty===diff));
 const pool=filtered.length>=25?filtered:(examPool.length?examPool:questions.filter(q=>q.exam===exam));
 if(!pool.length){$("quizCard").innerHTML=`<div class="quiz-welcome"><h3>Questions coming soon</h3><p>There are no questions available for this exam yet.</p></div>`;$("quizProgress").textContent="No questions for this filter";return;}
 const shuffled=pool.slice().sort(()=>Math.random()-.5);
 activeQuestions=Array.from({length:25},(_,i)=>({...shuffled[i%shuffled.length]}));
 activeQuestions=activeQuestions.sort(()=>Math.random()-.5); questionIndex=0; answered=false; renderQuestion();
});
function renderQuestion(){
 const q=activeQuestions[questionIndex]; answered=false;
 $("quizProgress").textContent=`Question ${questionIndex+1} of ${activeQuestions.length}`;
 $("quizCard").innerHTML=`<div class="question-top"><span>${q.exam} · ${q.subject} · ${q.difficulty}</span><span>${escapeHtml(q.chapter)}</span></div><div class="question-text">${questionIndex+1}. ${escapeHtml(q.q)}</div><div class="options">${q.options.map((o,i)=>`<button class="option" data-index="${i}">${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join("")}</div><div id="feedback"></div><div class="next-row"><button class="btn primary" id="nextQuestion" disabled>${questionIndex===activeQuestions.length-1?"Finish set":"Next question"} →</button></div>`;
 document.querySelectorAll(".option").forEach(btn=>btn.addEventListener("click",()=>answerQuestion(Number(btn.dataset.index))));
 $("nextQuestion").addEventListener("click",()=>{if(!answered)return;if(questionIndex<activeQuestions.length-1){questionIndex++;renderQuestion();}else finishQuiz();});
}
function answerQuestion(choice){
 if(answered)return; answered=true; const q=activeQuestions[questionIndex], correct=choice===q.answer; score+=correct?4:-1; localStorage.setItem("ts_score",String(score)); $("pointsDisplay").textContent=score;
 document.querySelectorAll(".option").forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add("correct");else if(i===choice)b.classList.add("wrong");});
 $("feedback").innerHTML=`<div class="explanation"><b>${correct?"Correct! +4 points":"Not quite. −1 point"}</b><br>${escapeHtml(q.explain)}</div>`;
 $("nextQuestion").disabled=false; saveLeaderboard();
}
function finishQuiz(){
 $("quizCard").innerHTML=`<div class="quiz-welcome"><span class="quiz-icon">✦</span><h3>Practice set complete!</h3><p>Your current total is <b>${score} points</b>. Review explanations for questions you missed and try again.</p><button class="btn primary" id="again">Try another set</button></div>`;
 $("quizProgress").textContent="Set completed";$("again").addEventListener("click",()=>$("startQuiz").click());saveLeaderboard();
}

function renderFormulas(subject){
 currentSubjectFormula=subject;
 document.querySelectorAll(".tab").forEach(b=>b.classList.toggle("active",b.dataset.formula===subject));
 $("formulaGrid").innerHTML=formulas[subject].map(f=>`<div class="formula-card"><small>${subject}</small><b>${escapeHtml(f[1])}</b><p>${escapeHtml(f[0])} — ${escapeHtml(f[2])}</p></div>`).join("");
}
document.querySelectorAll(".tab").forEach(b=>b.addEventListener("click",()=>renderFormulas(b.dataset.formula)));
renderFormulas("Physics");

$("playerForm").addEventListener("submit",e=>{e.preventDefault();player=$("playerName").value.trim();if(!player)return;localStorage.setItem("ts_player",player);saveLeaderboard();});
function saveLeaderboard(){
 if(player){let entries=JSON.parse(localStorage.getItem("ts_leaderboard")||"[]");const idx=entries.findIndex(x=>x.name.toLowerCase()===player.toLowerCase());if(idx>=0)entries[idx].score=score;else entries.push({name:player,score});localStorage.setItem("ts_leaderboard",JSON.stringify(entries));}
 renderLeaderboard();
}
function renderLeaderboard(){
 let entries=JSON.parse(localStorage.getItem("ts_leaderboard")||"[]");
 if(player&&!entries.some(x=>x.name.toLowerCase()===player.toLowerCase()))entries.push({name:player,score});
 entries.sort((a,b)=>b.score-a.score);
 $("leaderRows").innerHTML=entries.length?entries.slice(0,20).map((x,i)=>`<div class="leader-row"><span class="rank">${i+1}</span><span><span class="leader-name">${escapeHtml(x.name)}${x.name===player?" (you)":""}</span><span class="leader-sub">Practice learner</span></span><span class="leader-points">${x.score} pts</span></div>`).join(""):"<p class='small'>No scores yet. Save a display name and complete a practice question to appear here.</p>";
}
saveLeaderboard();


// Local demo authentication UI. Do not use for real/private accounts.
const authOverlay=$("authOverlay"), accountBtn=$("accountBtn"), authForm=$("authForm");
let authMode="login";
function setAuthMode(mode){authMode=mode;document.querySelectorAll(".auth-tab").forEach(b=>b.classList.toggle("active",b.dataset.mode===mode));$("authTitle").textContent=mode==="signup"?"Create your account":"Welcome back";$("authNameWrap").hidden=mode!=="signup";$("authName").required=mode==="signup";$("authPassword").autocomplete=mode==="signup"?"new-password":"current-password";$("authSubmit").textContent=mode==="signup"?"Create account":"Login";$("authError").textContent="";}
function currentAccount(){try{return JSON.parse(localStorage.getItem("ts_account")||"null")}catch{return null}}
function updateAccountButton(){const a=currentAccount();accountBtn.textContent=a?`Hi, ${a.name}`:"Login / Sign up";accountBtn.setAttribute("aria-label",a?`Signed in as ${a.name}. Click to account options`:"Login or sign up");}
function openAuth(){const a=currentAccount();if(a){if(confirm(`Signed in as ${a.name}. Log out?`)){localStorage.removeItem("ts_account");updateAccountButton();}return;}authOverlay.hidden=false;setAuthMode("login");$("authEmail").focus();}
accountBtn.addEventListener("click",openAuth);$("authClose").addEventListener("click",()=>authOverlay.hidden=true);authOverlay.addEventListener("click",e=>{if(e.target===authOverlay)authOverlay.hidden=true});document.addEventListener("keydown",e=>{if(e.key==="Escape")authOverlay.hidden=true});document.querySelectorAll(".auth-tab").forEach(b=>b.addEventListener("click",()=>setAuthMode(b.dataset.mode)));
authForm.addEventListener("submit",e=>{e.preventDefault();const email=$("authEmail").value.trim().toLowerCase(),password=$("authPassword").value;let accounts={};try{accounts=JSON.parse(localStorage.getItem("ts_demo_accounts")||"{}")}catch{};if(authMode==="signup"){const name=$("authName").value.trim();if(!name){$("authError").textContent="Please enter a display name.";return;}if(accounts[email]){$("authError").textContent="An account with this email already exists on this device.";return;}accounts[email]={name,password};localStorage.setItem("ts_demo_accounts",JSON.stringify(accounts));localStorage.setItem("ts_account",JSON.stringify({name,email}));player=name;localStorage.setItem("ts_player",player);saveLeaderboard();}else{if(!accounts[email]||accounts[email].password!==password){$("authError").textContent="Email or password not found on this device. Try signing up first.";return;}localStorage.setItem("ts_account",JSON.stringify({name:accounts[email].name,email}));player=accounts[email].name;localStorage.setItem("ts_player",player);saveLeaderboard();}authOverlay.hidden=true;authForm.reset();updateAccountButton();});
updateAccountButton();
