/* PolyBio Spring 2026 Symposium — Talk Data
 *
 * To update this site, edit this file. Each talk is an object in the `talks`
 * array. Fields:
 *   id                — URL slug; must be unique
 *   speaker           — speaker name
 *   institution       — affiliation
 *   title             — full talk title
 *   theme             — one of: "Gut viral persistence", "Microclots & vascular",
 *                       "Neurology", "Immune dysfunction", "Diagnostics",
 *                       "Therapeutics", "Cardiovascular",
 *                       "Programs & infrastructure", "Other diseases & methods"
 *   laySummary        — plain-English one-sentence summary (shown on closed card)
 *   technicalSummary  — full 4–5 sentence technical summary (shown when expanded)
 *   relatedTalks      — array of other talk ids referenced in the technical summary
 *   videoUrl          — optional; if added, a "Watch talk" link appears in expanded view
 */

window.SYMPOSIUM_DATA = {
  meta: {
    eventName: "PolyBio Spring 2026 Symposium",
    eventDate: "2026-05-22",
    pageTitle: "PolyBio Spring 2026 Symposium — Talk Summaries"
  },
  disclaimer: "The research summarized below was presented at the PolyBio Spring 2026 Symposium and reflects work in progress. Data, conclusions, and interpretations may shift as additional analyses are completed and as studies expand to more participants.",
  talks: [
    {
      id: "pretorius-microclots",
      speaker: "Resia Pretorius",
      institution: "Stellenbosch University",
      title: "Fibrinoloid microclots, endothelial dysfunction, and proteomics across Long COVID, post-vaccination syndrome, and POTS",
      theme: "Microclots & vascular",
      laySummary: "Tiny abnormal blood clots in Long COVID patients carry distinct chemical fingerprints that can be told apart from post-vaccination syndrome and pre-COVID POTS, pointing to three concrete drug strategies.",
      technicalSummary: "Pretorius walked through six recent papers building toward a unified framework that defines four phenotypes of “fibrinoloid microclot complexes” (FMCs): cell-debris–seeded, NET-containing immune complexes, misfolded fibrinogen, and amyloidogenic aggregates on intact cells, with phosphatidylserine flips proposed as a common upstream mechanism. In vitro work showed that Long COVID platelet-poor plasma reduces intracellular von Willebrand factor and degrades the glycocalyx in human endothelial cells, and two-color imaging flow cytometry detected platelet-monocyte aggregates on 29% of monocytes in Long COVID samples versus 5% in controls, independent of age. Proteomics discriminated post-vaccination syndrome microclots (intrinsic-pathway factor 10/11 elevation) from Long COVID microclots (vWF/NET signature), and post-translational-modification mapping across pre-COVID POTS, Long COVID, and Long COVID POTS showed similar microclot cargo but distinct chemistry — Long COVID FMCs carry AGE-glycation on fibrinogen (a diabetic-pattern modification), while pre-COVID POTS show oxidation/deamination of apolipoproteins. The framework points to three intervention axes — restoring fibrinolysis, targeting platelet-monocyte and NET aggregates, and addressing upstream chemistry with glycation inhibitors or antioxidants — and a South African clinical trial is in development.",
      relatedTalks: []
    },
    {
      id: "buggert-gut",
      speaker: "Marcus Buggert",
      institution: "Karolinska Institute",
      title: "SARS-CoV-2 gut and lymphoid pathology with longitudinal blood proteomics",
      theme: "Gut viral persistence",
      laySummary: "Years after infection, SARS-CoV-2 is still detectable in the gut tissue of Long COVID patients with severe GI symptoms, even when standard blood tests look normal.",
      technicalSummary: "Buggert presented two studies combining longitudinal blood proteomics and deep tissue sequencing. In a Swedish cohort of roughly 800 patients (171 with serial samples through two years post-infection), Olink proteomics with David Price (UK) identified a multi-symptom severe cluster whose pro-inflammatory module (IL-6, TNF, CXCL8, IL-32) drops after acute infection but plateaus rather than resolving after six months. In a separate study, colonoscopic biopsies from 10 severe Long COVID GI patients (more than four years symptomatic) and 7 healthy controls showed broadly upregulated interferon-stimulated genes — particularly in adaptive immune cells — alongside elevated baseline TNF in T-cell subsets and germinal-center B cells, with reduced TGF-β and furin. Kraken2 metagenomic analysis of single-cell RNA-seq data detected SARS-CoV-2 reads enriched in Long COVID gut cells, with the vast majority of viral-aligning reads mapping to SARS-CoV-2. The gut findings converge directly with independent gut-persistence data from Tim Henrich (UCSF), Nicolas Huot (Institut Pasteur), and Esen Sefik (Yale), reinforcing a compartmentalized tissue-based pathology that is not visible in peripheral blood.",
      relatedTalks: ["henrich-tissue", "huot-nhp", "sefik-myeloid"]
    },
    {
      id: "brodin-genetics",
      speaker: "Petter Brodin",
      institution: "Karolinska Institute",
      title: "Whole genome sequencing and immune profiling in severe Long COVID",
      theme: "Immune dysfunction",
      laySummary: "Genetic susceptibility to severe Long COVID appears to sit in genes that act on body tissues rather than immune cells, and autoantibodies against interferon — a known driver of severe acute COVID — do not appear to be the cause.",
      technicalSummary: "Brodin's group pursued two hypotheses in a roughly 200-patient severe Long COVID cohort (Swedish and Italian sites) characterized by POTS, autonomic dysregulation, and abnormal breathing. The first — that autoantibodies against type-1 interferons might drive Long COVID, paralleling findings in severe acute COVID — returned a clean negative, with no enrichment over healthy blood donors (collaboration with Nils Lunde at Uppsala). The second approach used whole-genome sequencing of approximately 260 severe Long COVID patients against ~88,000 SARS-CoV-2-infected non-long-COVID controls and identified enriched, highly significant likely loss-of-function variants — notably, few of which map to known white-blood-cell function genes. The team is moving these variants into intestinal organoids and barrier epithelium to study TLR and viral-stimulus responses, on the hypothesis that genetic susceptibility may sit in non-immune tissue compartments rather than in immune cells.",
      relatedTalks: []
    },
    {
      id: "salmon-maraviroc",
      speaker: "Dominique Salmon",
      institution: "INSERM",
      title: "Maraviroc plus pravastatin in Long COVID patients with severe GI symptoms",
      theme: "Therapeutics",
      laySummary: "A small pilot of two repurposed drugs (maraviroc plus pravastatin) reduced severe GI symptoms in 13 of 19 Long COVID patients and shrank their microclots; symptoms returned when treatment was paused.",
      technicalSummary: "Salmon reported an observational pilot of maraviroc plus pravastatin in 19 Long COVID patients with at least four severe gastrointestinal symptoms, with a median 16-month follow-up. The primary outcome (≥30% reduction in severe GI symptoms) was met in 13 of 19 patients; stomach cramps, diarrhea, and bloating responded most, food intolerance least, and two planned treatment interruptions caused symptom relapse that reversed on re-introduction. In a paired biomarker subset (mean 4.3 months on treatment), platelet microclots were present in all 12 pre-treatment samples and decreased in size in 7 of 12; SARS-CoV-2 RNA in platelets fell in 7 of 8 positive cases, and low-level plasma spike protein declined in 5 of 7 positive cases. Whole-blood serotonin (90% of which is platelet-stored) was low pre-treatment in 6 patients and rose on treatment in all 6. A multicenter randomized trial (combination versus maraviroc alone versus placebo) is in planning, pending funding.",
      relatedTalks: []
    },
    {
      id: "huot-nhp",
      speaker: "Nicolas Huot",
      institution: "Institut Pasteur",
      title: "SARS-CoV-2 persistence in the intestine in a non-human primate model",
      theme: "Gut viral persistence",
      laySummary: "In monkeys re-infected with COVID, the virus persists specifically in the small intestine and triggers the formation of abnormal lymphoid structures there — direct animal-model evidence for the gut-reservoir hypothesis seen in human patients.",
      technicalSummary: "Huot presented a cynomolgus macaque model in which animals were infected with ancestral SARS-CoV-2, vaccinated, and then reinfected with BA.1, and stratified at 21 weeks into “persistent” and “resolver” groups based on bronchoalveolar viral RNA. Persistent animals showed significant expansion of Peyer's patches in the ileum and tertiary lymphoid structures in the jejunum and colon (where these are normally absent); NSP3 staining localized SARS-CoV-2-positive cells in or adjacent to the mantle of these lymphoid structures, with B cells excluded as the infected cell type. Quantitative viral RNA was detected only in the ileum, not the duodenum or colon, and co-culture with permissive Vero cells produced replication-competent virus exclusively from persistent monkeys' ileum. Spectral cytometry, single-cell RNA-seq, and MACSima spatial proteomics are now being applied to identify the infected cell type and characterize the local immune environment. The ileum-specific persistence with adjacent lymphoid-structure expansion parallels the human gut-reservoir data presented by Buggert, Henrich, and Sefik.",
      relatedTalks: ["buggert-gut", "henrich-tissue", "sefik-myeloid"]
    },
    {
      id: "yonker-pediatric",
      speaker: "Lael Yonker",
      institution: "University of Texas Southwestern",
      title: "Neutrophil-driven endothelial injury and microclot formation in pediatric Long COVID",
      theme: "Microclots & vascular",
      laySummary: "In children and young adults with Long COVID, neutrophils (a type of white blood cell) are over-activated by spike-and-antibody complexes circulating in the blood, damaging the blood-vessel lining and forming microclots.",
      technicalSummary: "Yonker compared 23 healthy children with 61 children and young adults with Long COVID, many presenting with endovascular symptoms such as orthostatic dizziness and palpitations. Neutrophils exposed to Long COVID plasma underwent NETosis at substantially higher rates than those exposed to control plasma, with the highest rates seen in patients with detectable circulating spike protein; cell-free DNA tracked as an indirect marker. Reconstituted immune complexes (vaccinated-donor antibodies combined with recombinant spike) drove dose-dependent neutrophil activation, while antibody or spike alone produced little response — implicating the immune complex itself as the proximal trigger. Patients showed increased microclot burden and altered endothelial cytokine profiles, with associations among neutrophil markers, endothelial injury, amyloid signal, and cell-free DNA (not yet established as causal). The proposed sequence — leaky tissue reservoir → circulating spike → immune complexes → neutrophil activation → endothelial damage — converges with the gut-barrier rationale behind Peter Moschovis's larazotide trial and with Esen Sefik's evidence of productive neutrophil infection.",
      relatedTalks: ["moskovitz-larazotide", "sefik-myeloid"]
    },
    {
      id: "miller-retina",
      speaker: "Sean Miller",
      institution: "Yale University",
      title: "Retinal biomarkers and organoid models of infection-triggered neurodegeneration",
      theme: "Neurology",
      laySummary: "Long COVID patients show signs of neurodegeneration visible in the retina, and lab-grown “mini-retinas” exposed to SARS-CoV-2 spike protein develop the same protein clumps seen in Alzheimer's and Parkinson's disease.",
      technicalSummary: "Miller used the retina as an accessible CNS tissue to study Long COVID neurodegeneration, drawing on a postmortem analysis (published in Science Advances) of retinas from brain-fog patients via the Yale Long COVID Clinic and a rapid-autopsy program. Single-nuclear sequencing showed increased microglia, astrogliosis, and enrichment of neurodegenerative, antimicrobial, and protein-aggregation pathways. An ongoing IRB-approved live cohort at the Yale Eye Center (15 patients to date) combines multimodal retinal imaging with electroretinograms and has documented abnormal protein deposition, drusen-like deposits, and altered ERG B-wave responses — including in a 45-year-old patient with findings typically unexpected at that age. Retinal organoid models exposed to SARS-CoV-2 spike develop amyloid-beta aggregation (published 2024) and, newly, alpha-synuclein aggregation, paralleling the protein chemistry of Alzheimer's and Parkinson's co-pathology via antimicrobial peptide pathways. The protein-aggregation signal converges with Resia Pretorius's amyloidogenic FMCs and Michael VanElzakker's elevated brain-derived p-tau217 in Long COVID.",
      relatedTalks: ["pretorius-microclots", "vanelzakker-brainstem"]
    },
    {
      id: "luchini-borrelia",
      speaker: "Alessandra Luchini",
      institution: "George Mason University",
      title: "Urinary extracellular vesicle biomarkers for a Borrelia-associated Long COVID subgroup",
      theme: "Diagnostics",
      laySummary: "A urine test that detects Borrelia (Lyme disease) proteins directly — not antibodies — may help identify Long COVID patients who also have undiagnosed Lyme co-infection driving their symptoms.",
      technicalSummary: "Luchini's group developed urinary extracellular-vesicle (EV) assays to detect direct antigens from infection-associated pathogens, hypothesizing that Borrelia co-infection contributes to clinical heterogeneity in Long COVID. Mass spectrometry identified three conserved Borrelia peptides — P66, flagellin, and methyl-accepting chemotactic protein F — across all pathogenic Borrelia clades; in a 60-individual longitudinal study, peptide concentration tracked symptom intensity with >95% sensitivity and specificity in active Lyme, and antigen was detectable in urine before IgM seroconversion. The team is now applying parallel-reaction-monitoring mass spectrometry and immunoassay to Long COVID samples from the Mount Sinai Cohen Center cohort (~30 patients), compared against CDC IgM/IgG serology and a Lyme 6-peptide ELISA. A parallel validation study in 50 pulmonary tuberculosis patients in Lima identified Mycobacterium tuberculosis antigens in urinary EVs along with organ-specific proteins, supporting platform generalizability. The Long COVID panel will also measure markers of astrocyte activation, blood-brain-barrier dysfunction, neural injury, mast-cell activation, vascular inflammation, and type-1 interferon signaling.",
      relatedTalks: []
    },
    {
      id: "lo-lymphnodes",
      speaker: "Michela Locci (presented by Amy Proal)",
      institution: "University of Pennsylvania",
      title: "Adaptive immune responses in Long COVID lymphoid tissue",
      theme: "Immune dysfunction",
      laySummary: "In Long COVID, the B cells inside lymph nodes appear to be making faulty antibody responses against SARS-CoV-2 — a defect invisible in routine blood tests but potentially explaining why the virus is not fully cleared.",
      technicalSummary: "Michela Locci was unable to attend the symposium due to illness, so Amy Proal presented this work on her behalf, together with additional related findings on lymph-node biology. Locci's group uses fine-needle aspirate biopsies of lymph nodes from Long COVID patients and matched controls to study B-cell responses to SARS-CoV-2 directly in lymphoid tissue. The work has identified profound disruption of SARS-CoV-2-specific B-cell responses in Long COVID lymph nodes that is not evident in matched blood from the same participants — aberrant germinal-center and B-cell activity that may explain failure to fully clear SARS-CoV-2. An extended project (PolyBio plus Wallace Research Foundation) now incorporates Epstein-Barr virus, testing whether EBV (which infects B cells directly) reshapes B-cell developmental trajectories, given that SARS-CoV-2 downregulates interferon signaling and can enable EBV reactivation. Amy Proal additionally highlighted a UC Davis School of Veterinary Medicine paper on feline infectious peritonitis showing that persistent coronavirus infects T and B lymphocytes (not only macrophages, as long believed), with sub-genomic FIPV RNA in CD3+ T cells indicating active replication. The B-cell-tissue dysfunction story converges with EBV-reactivation signals reported by Mark Painter, Frances Eun-Hyung Lee, and Nadia Roan.",
      relatedTalks: ["painter-cd8", "lee-mensa", "roan-cytolytic"]
    },
    {
      id: "moskovitz-larazotide",
      speaker: "Peter Moschovis",
      institution: "Harvard Medical School",
      title: "Larazotide for gut barrier dysfunction in Long COVID",
      theme: "Therapeutics",
      laySummary: "An interim look at a 107-patient trial of larazotide — a drug that seals the gut lining — suggests improvements in sleep, fatigue, GI symptoms, and daily function for Long COVID patients, with full unblinded results expected this summer.",
      technicalSummary: "Moschovis presented an interim update on a Phase 2a randomized, double-blind trial of larazotide — an enterically coated synthetic peptide that prevents intestinal tight-junction opening — in Long COVID. The rationale ties elevated serum zonulin to Long COVID risk via gut barrier dysfunction; the same intervention previously reduced GI symptom duration and time-to-spike clearance in Lael Yonker's MIS-C trial. The current study enrolled 107 participants aged 7–50 (mean ~30, roughly 75% adults, mean of two prior infections, approximately two-thirds women) with 2:1 randomization across three weeks of treatment and five weeks of follow-up; the final in-person visit was May 8 and data collection is wrapping up. A blinded interim analysis (n=40, reviewed by the DSMB) showed improvements in sleep, fatigue, daily-life impact, GI symptoms, and cardiovascular symptoms, with unblinded results expected later this summer. The trial directly tests the gut-barrier-leak model also invoked by Yonker's pediatric work.",
      relatedTalks: ["yonker-pediatric"]
    },
    {
      id: "vanelzakker-brainstem",
      speaker: "Michael VanElzakker",
      institution: "Harvard Medical School",
      title: "Brainstem neuroinflammation and brain-derived p-tau217 in Long COVID and ME/CFS",
      theme: "Neurology",
      laySummary: "Brain scans show Long COVID patients have inflammation in the brainstem region where the vagus nerve enters, and their blood shows an Alzheimer's-risk marker at roughly four times the rate of healthy controls.",
      technicalSummary: "VanElzakker presented dual MRI-PET imaging of 23 Long COVID patients and 14 COVID-recovered controls using a translocator-protein (TSPO) radioligand that marks activated microglia. Long COVID patients showed activation in the brainstem — specifically the nucleus of the solitary tract, where the vagus nerve enters the brain and which regulates sickness behavior, autonomic function, pain, and nausea. Pre-2018 ME/CFS patients also showed brainstem activation, with Long COVID showing additional patterns adjacent to vasculature and thin blood-brain-barrier regions. A blood-biomarker arm tested brain-derived p-tau217, an Alzheimer's-risk marker: positivity was roughly 3% in both healthy controls (1/49) and ME/CFS (1/26), versus ~14% in Long COVID (10/69), raising the question of whether SARS-CoV-2 carries unique long-term Alzheimer's risk. The p-tau217 finding converges with Sean Miller's amyloid-beta and alpha-synuclein signals in retinal organoids.",
      relatedTalks: ["miller-retina"]
    },
    {
      id: "putrino-mmt",
      speaker: "David Putrino",
      institution: "The Icahn School of Medicine at Mount Sinai",
      title: "Microtesla magnetic therapy for cognitive impairment in Long COVID",
      theme: "Therapeutics",
      laySummary: "A gentle home-use magnetic-field device improved cognitive function in Long COVID patients in a small placebo-controlled trial, with no side effects; a larger trial for FDA approval is launching.",
      technicalSummary: "Putrino presented results from a first-in-human triple-blinded RCT of microtesla magnetic therapy (the “Mighty” device, developed with Ferrium) for cognitive impairment in Long COVID — symptoms reported by more than 60% of Long COVID patients. The device delivers low-energy, low-frequency magnetic fields roughly 100,000× weaker than rTMS; the proposed mechanism is mild mitochondrial strain triggering an anti-inflammatory mitohormetic response rather than direct neuronal stimulation. The trial randomized 30 participants 2:1 active:sham to 15-minute sessions every 72 hours for four weeks, with a four-week follow-up. There were no device-related adverse events, 100% adherence, and blinding integrity was preserved; the active arm showed improvements in visual attention, cognitive processing speed, attention/inhibition, and emotional well-being (which declined in sham), with gains sustained at follow-up. A larger multi-site pivotal trial for FDA approval is now being launched.",
      relatedTalks: []
    },
    {
      id: "painter-cd8",
      speaker: "Mark Painter",
      institution: "J. Craig Venter Institute",
      title: "Virus-specific CD8 T cells as biosensors of antigen persistence",
      theme: "Immune dysfunction",
      laySummary: "In about 40% of Long COVID patients, the virus-fighting CD8 T cells specific to SARS-CoV-2 look “exhausted” — they don't divide or produce immune signals normally — while their flu-fighting cells are unaffected.",
      technicalSummary: "Painter used HLA-class-I tetramers to track virus-specific CD8 T cells without ex vivo stimulation, multiplexed (per Evan Newell's approach) to detect SARS-CoV-2, EBV, CMV, and influenza specificities simultaneously across hundreds of samples from Penn, Yale, and UCSF cohorts. Roughly 40% of Long COVID participants showed persistent activation of spike-specific CD8 T cells years after infection, while flu-specific cells in the same patients looked normal — a virus-specific effect; a subset also showed EBV-specific activation, with CMV and flu unaffected. Single-cell RNA-seq showed Long COVID spike-specific T cells shifted from memory toward effector/activated states, with enrichment of exhaustion-associated genes including TOX, CD101, BLIMP1, TBET, and 2B4. Functional assays in a sub-cohort showed reduced IFN-γ and TNF-α production after spike-peptide stimulation and markedly reduced proliferation (0–2 divisions in Long COVID versus 4–5 in recovered controls). The exhaustion phenotype and the EBV-reactivation signal converge with Nadia Roan's cytolytic-CD8 data and with Frances Eun-Hyung Lee's MENSA findings.",
      relatedTalks: ["roan-cytolytic", "lee-mensa"]
    },
    {
      id: "stott-microfluidic",
      speaker: "Shannon Stott",
      institution: "Boston University",
      title: "Ultra-sensitive microfluidic detection of SARS-CoV-2 virions in blood",
      theme: "Diagnostics",
      laySummary: "A new blood test can detect SARS-CoV-2 viral particles at extremely low levels (3 particles per milliliter) and is now being applied to Long COVID samples to look for persistent virus in circulation.",
      technicalSummary: "Stott presented an ultra-sensitive microfluidic platform for detecting intact SARS-CoV-2 virions in blood, built on a herringbone-mixer chip with engineered ACE2 receptor traps (from Jim Wells, UCSF) for capture and ddPCR readout. The assay, CLIA-validated at MGH, achieves a limit of detection of 3 viral particles per milliliter of blood in blinded spike samples, with cross-reactivity <5% and specificity ~99.9%. In acute COVID, 72% of plasma samples were positive, with concordant signal in saliva and stool; some patients remained positive across serial timepoints. Early blinded Long COVID samples from the UCSF LIINC cohort showed measurable signal above recovered controls (with the limit set at 5 particles); next-batch samples with longer time-points and improved Bio-Rad readout are in process, and the platform will also distinguish viral RNA inside intact virions from RNA in extracellular vesicles. The blood-detection approach complements tissue-based persistence detection from Henrich, Buggert, and Sefik.",
      relatedTalks: ["henrich-tissue", "buggert-gut", "sefik-myeloid"]
    },
    {
      id: "lee-mensa",
      speaker: "Frances Eun-Hyung Lee",
      institution: "Emory University",
      title: "MENSA assay to identify SARS-CoV-2 persistence and viral reactivation",
      theme: "Diagnostics",
      laySummary: "A specialized blood test that captures only recently produced antibodies shows roughly 42% of Long COVID patients have ongoing immune responses to SARS-CoV-2 and 70% to one or more herpes-family viruses.",
      technicalSummary: "Lee used the MENSA (Medium Enriched for Newly Synthesized Antibodies) assay, which captures antibodies actively secreted by recently activated plasma cells released from tissue rather than the persistent serum pool, providing a window into recent rather than historical immune activity. In an initial 60-patient Long COVID study, ~42% were MENSA-positive for SARS-CoV-2; expanding the panel to include EBV, CMV (AD160 and Merlin strains), and HSV-2 brought any-virus positivity to ~70%, while serum showed no difference between Long COVID and convalescent groups. In the current PolyBio-supported Mount Sinai trial (TDF versus maraviroc versus placebo), 81 of 109 samples have been run with baseline 33% SARS-CoV-2 MENSA positivity; a longitudinal subgroup of 19 with baseline/day-90/day-180 samples shows mixed trajectories (some converting positive-to-negative, some negative-to-positive), still blinded. A replication cohort of 77 patients shows ~35% SARS-CoV-2 positivity with lower herpesvirus positivity than the original cohort. The herpesvirus-reactivation signal converges with Mark Painter's EBV-specific T-cell findings and Michela Locci's B-cell work.",
      relatedTalks: ["painter-cd8", "lo-lymphnodes"]
    },
    {
      id: "peluso-viper",
      speaker: "Michael Peluso",
      institution: "University of California, San Francisco",
      title: "VIPER: Validating noninvasive biomarkers of SARS-CoV-2 persistence",
      theme: "Programs & infrastructure",
      laySummary: "An $8M UCSF program is enrolling 100 Long COVID patients and 50 controls for gut biopsies and blood samples to figure out which noninvasive tests reliably detect persistent virus in the body.",
      technicalSummary: "Peluso introduced VIPER (Validating and Investigating Promising Existing biomarkeRs), an $8M effort to unify previously siloed Long COVID biomarker work and validate noninvasive, scalable assays for SARS-CoV-2 persistence. The program has three components: analytic standards built from San Francisco Blood Bank donor plasma spiked with known SARS-CoV-2 quantities for serial-dilution curves; integration with the existing UCSF LIINC biobank for a fast start; and a new prospective VIPER cohort of 100 Long COVID patients and 50 recovered controls, each anchored on a gut-biopsy day with most also receiving upper endoscopy. The collection protocol is run like a clinical trial, with timed pre- and post-procedure sampling generating more than 400 aliquots per participant. The first participant was screened during the week of the symposium; laboratory partners will be selected in summer, and samples will move to labs in fall. Public-private partnerships under discussion would extend the platform beyond viral persistence to validate biomarkers across other Long COVID mechanisms.",
      relatedTalks: []
    },
    {
      id: "peluso-chime",
      speaker: "Michael Peluso",
      institution: "University of California, San Francisco",
      title: "CHIME: Applying LIINC infrastructure to pre-COVID ME/CFS",
      theme: "Programs & infrastructure",
      laySummary: "The same UCSF infrastructure used to study Long COVID is now being applied to people who developed ME/CFS before COVID, to test whether the same underlying biology drives their illness.",
      technicalSummary: "Peluso also presented CHIME, an observational study that applies the LIINC Long COVID infrastructure to pre-COVID ME/CFS, grounded in the rationale (laid out in work with Steve Deeks and Maureen Hanson at Cornell) that infection-associated chronic illnesses share biological substrate. Inspired by John Chia's data on enterovirus persistence in the ME/CFS gut, the protocol moves participants through remote consent, screening survey, structured interview, medical-record review, and an adjudication committee that requires 2015 IOM ME/CFS criteria before in-person visits. The intensive visit collects clinical measurements, biospecimens, hand-grip and active-stand tests, neurocognitive testing, and follow-on procedures including gut biopsy and imaging; Charles Chiu (UCSF) will run metagenomics. Status: more than 130 contacted in six months, 69 interest forms, 30 consented, 29 screened; the adjudication committee began in January, in-person visits began in March, and the first gut biopsy is scheduled for June. Initial data will be presented at the fall symposium.",
      relatedTalks: []
    },
    {
      id: "henrich-tissue",
      speaker: "Timothy Henrich",
      institution: "University of California, San Francisco",
      title: "Characterizing SARS-CoV-2 tissue reservoirs in Long COVID",
      theme: "Gut viral persistence",
      laySummary: "SARS-CoV-2 is still detectable in the gut lining of roughly 20–25% of Long COVID patients — up to 4.5 years after infection — with the immune system actively sensing the virus but failing to clear it.",
      technicalSummary: "Henrich presented analysis of 56 colorectal biopsies from the LIINC program (43 Long COVID, 13 fully recovered) using chromogenic RNAscope, pre-enriched metagenomic sequencing, and qPCR. SARS-CoV-2 was detected in ~20–25% of Long COVID samples across a timeline from 5.5 months to 4.5 years post-infection, with a bimodal distribution clustering at 4–8 months post-most-recent-infection and at 4+ years out without known reinfection; metagenomic reads mapped predominantly to ORF1ab and ORF3a (no spike), and virus localized to epithelium and lamina propria myeloid cells. Targeted and unbiased transcriptomics showed distinct host-response clustering in Long COVID — with downregulation of antigen-presentation, FasR/cytotoxicity, and cell-migration pathways, suggesting active immune sensing without effective clearance; clinical phenotype did not predict tissue biology. Single-cell RNA-seq plus TCR-seq identified clonally expanded T cells with TCR sequences linked to SARS-CoV-2 and showed goblet, colonocyte, and TAC epithelial cells with strongly upregulated interferon, TNF, NF-κB, RIG-I, and TLR signaling, while IgA-producing plasma cells appeared to downregulate these pathways — a possible immunoregulatory brake on clearance. The findings closely mirror Marcus Buggert's independent Karolinska gut-biopsy data, Nicolas Huot's NHP ileum findings, and Esen Sefik's humanized-mouse work; together these four independent datasets support a major working model of Long COVID mechanism — gut viral persistence leading to incomplete clearance and immune dysregulation.",
      relatedTalks: ["buggert-gut", "huot-nhp", "sefik-myeloid"]
    },
    {
      id: "peng-endometriosis",
      speaker: "Beverly Peng",
      institution: "J. Craig Venter Institute",
      title: "Single-nucleus RNA-seq analysis of endometriosis tissue",
      theme: "Other diseases & methods",
      laySummary: "A pilot single-cell study of endometriosis tissue catalogued 36 cell types and validated methods that can be applied to other tissue-based diseases including Long COVID.",
      technicalSummary: "Peng presented single-nucleus RNA-seq of endometrial tissue from 28 patients (20 endometriosis, 8 controls), producing 94,000 nuclei across 36,000 genes in collaboration with Dr. Nicole Donnelly at the University of Pittsburgh. The analysis used NS-Forest (random-forest identification of necessary and sufficient marker genes) and FR-Match (minimum-spanning-tree cell-type matching) — both co-developed in her group — against the published Human Endometrial Cell Atlas reference. Four broad lineages and 36 granular cell types were annotated, with high-confidence one-to-one matches for some clusters and broad-lineage matches for others. Cell-type proportion comparisons after normalization showed immune-cell enrichment in endometriosis (biologically expected) alongside unexpected control-enrichment for venous and arterial clusters, warranting follow-up. The work is a methods-validation pilot intended to scale, and though off the main Long COVID theme, the tissue-omics approach parallels methods used across other symposium presentations.",
      relatedTalks: []
    },
    {
      id: "roan-cytolytic",
      speaker: "Nadia Roan",
      institution: "Gladstone Institutes",
      title: "Cytolytic virus-specific CD8 T cell responses in Long COVID",
      theme: "Immune dysfunction",
      laySummary: "A type of cell-killing immune cell stays abnormally active in Long COVID — especially in women — which may help explain why Long COVID disproportionately affects women.",
      technicalSummary: "Roan presented combinatorial-tetramer CyTOF (eight barcoding channels enabling up to 56 specificities per sample with 29 phenotyping markers) applied to SARS-CoV-2-, EBV-, CMV-, and influenza-specific CD8 T cells from the UCSF LIINC cohort. Unbiased clustering produced 24 clusters; clusters enriched in recovered participants carried low exhaustion markers (PD-1, TIGIT, CD39), while Long COVID participants were enriched in virus-specific clusters all sharing the cytolytic markers Granzyme B and CD29 — driven primarily by female participants. Manual gating confirmed higher CD29+/Granzyme B+ CD8 frequencies in Long COVID, and longitudinal data showed Granzyme B decays in recovered patients but rises in Long COVID — indicating failure to terminate cytolytic responses post-acute infection. A PolyBio-funded tissue study using biopsies of tolerogenic tissues (gut, endometrium, endocervix, ectocervix) is in early recruitment (1 Long COVID and 3 control participants to date). The persistent CD8 activation finding complements Mark Painter's exhaustion data, and the sex bias may help explain the female predominance of Long COVID.",
      relatedTalks: ["painter-cd8"]
    },
    {
      id: "giannarelli-plaque",
      speaker: "Chiara Giannerelli",
      institution: "New York University",
      title: "SARS-CoV-2 persistence in vascular tissue and cardiovascular risk",
      theme: "Cardiovascular",
      laySummary: "SARS-CoV-2 persists in atherosclerotic plaques in some patients' arteries and reprograms the immune cells inside them, providing a direct mechanism for the elevated heart attack and stroke risk seen after COVID infection.",
      technicalSummary: "Giannerelli analyzed more than 140 subjects from the Athero and AtheroCore cohorts with coronary or carotid plaque samples categorized by COVID status using Luminex serology calibrated for two-year sensitivity and specificity. Across multi-omic profiling (Luminex, bulk RNA-seq, single-cell RNA-seq), COVID history was the second-largest contributor to transcriptional variance in atherosclerotic plaques, exceeding smoking, sex, hypertension, and dyslipidemia. Plaques from COVID-positive patients showed upregulated IL-6 and IL-1β cytokine signaling and downregulated cholesterol/lipid homeostasis; viral RNA was detectable in some carotid and coronary plaques by deep sequencing, including in patients classified COVID-negative serologically (consistent with infection more than two years prior). Distinct LTR-family transposable elements were upregulated in COVID-positive plaques and enriched in myeloid cells, with ex vivo vascular-explant infection reproducing TE activation peaking at 72 hours; the downstream functional consequence is impaired macrophage efferocytosis, a clearance mechanism whose loss promotes plaque growth and cardiovascular events. The work provides a mechanistic link between SARS-CoV-2 persistence and elevated post-COVID cardiovascular risk.",
      relatedTalks: []
    },
    {
      id: "tseng-postscd",
      speaker: "Zian Tseng",
      institution: "University of California, San Francisco",
      title: "Post-mortem mapping of SARS-CoV-2 persistence in sudden cardiac death (POST-SCD)",
      theme: "Cardiovascular",
      laySummary: "In cases of unexplained sudden cardiac death in San Francisco, roughly 4% are found to have SARS-CoV-2 in heart tissue at autopsy — sometimes in people with no prior COVID diagnosis at all.",
      technicalSummary: "Tseng presented data from POST-SCD, a 15-year collaboration with the San Francisco Medical Examiner with a 97% autopsy rate across ~20,000 deaths in three years. After family-consent collection, nearly 450 cases are banked with pre-2020 epidemiology for comparison; a key methodological insight is that instant-trauma deaths provide a cleaner control than hospitalized trauma deaths, because hospitalization itself produces a strong immune transcriptional signal. Of the first ~56 post-2020 myocardium samples processed, 4 (~7%; ~4% after subtracting acute COVID cases) were positive for SARS-CoV-2 in heart tissue — including two opiate-overdose cases with virus in heart and brain, one 2024 cardiac-hypertrophy sudden death with no clinical COVID evidence (an occult tissue reservoir), and a young-adult myocarditis death adjudicated pre-sequencing with negative autopsy serology but positive deep-tissue sequencing. Spatial profiling on FFPE blocks is mapping spike RNA within neural tissue of the brain-positive cases, with targeted-probe enrichment also screening for other viruses. The findings document a tissue-reservoir mechanism in unexpected cardiac and cardiopulmonary sudden death.",
      relatedTalks: []
    },
    {
      id: "vanbrocklin-pet",
      speaker: "Henry VanBrocklin",
      institution: "University of California, San Francisco",
      title: "Whole-body PET imaging of T cell activation in Long COVID",
      theme: "Diagnostics",
      laySummary: "Whole-body PET scans show Long COVID patients have activated immune cells in many tissues simultaneously, and the pattern shifts measurably after anti-spike antibody treatment.",
      technicalSummary: "VanBrocklin presented whole-body PET imaging of T cell activation in Long COVID using [18F]F-AraG (FRG), a nucleoside analog that is trapped in activated T cells because SAMHD1 — which normally dephosphorylates it — is downregulated upon activation. In the first 24 of 79 Long COVID participants reported, tissue-by-tissue analysis showed significantly elevated FRG uptake versus pre-COVID controls in brain, lung, lymph nodes, marrow, liver, spleen, parotid, nasal turbinates, hilar lymph nodes, and lumbar marrow. Symptom-phenotype-specific signals emerged: cardiopulmonary Long COVID patients showed increased rectosigmoid/colon-wall uptake, and seven olfactory Long COVID patients showed posterior nasopharynx uptake (a possible viral CNS entry route). The platform is now embedded as a sub-study in two interventional trials — OUTSMART (anti-spike monoclonal; 36 enrolled, 10 imaged, with significant post-treatment decreases in cauda equina, temporal lobe, thoracic spinal cord, and submandibular gland uptake in the active arm) and PREVAIL (ensitrelvir versus saline, 40 enrolled, 24 imaged, analysis pending). The whole-body activation map converges with the tissue-based mechanism documented by Henrich, Buggert, Sefik, and Huot.",
      relatedTalks: ["henrich-tissue", "buggert-gut", "sefik-myeloid", "huot-nhp"]
    },
    {
      id: "sefik-myeloid",
      speaker: "Esen Sefik",
      institution: "Yale University",
      title: "Myeloid SARS-CoV-2 reservoirs in humanized mice",
      theme: "Gut viral persistence",
      laySummary: "In mice given human immune systems, both macrophages and neutrophils (two types of white blood cells) can be productively infected by SARS-CoV-2 and serve as long-term reservoirs — removing them clears the virus.",
      technicalSummary: "Sefik uses the MISTRG6 humanized-mouse platform — engineered to support human immune development including the myeloid lineages that other humanized models fail to capture — combined with transplanted human lung, liver, and (in progress) intestinal tissue. The lab previously showed that human macrophages are infected via ACE2-, antibody-, and CD163-mediated routes and undergo NLRP3-inflammasome activation leading to pyroptosis, validated against New Haven hospital autopsy samples. Recent work shows that human neutrophils express ACE2 and can be productively infected (~40% positive with reporter virus), with subgenomic-RNA primer sets (developed with the Iwasaki lab) detecting active replication as early as four hours post-infection and requiring high antiviral doses for clearance. Lineage-depletion experiments demonstrate that any myeloid lineage can sustain viral persistence, and depleting all myeloid cells clears virus and reduces epithelial infection — establishing macrophages and neutrophils as functional reservoirs rather than passive bystanders. The myeloid-reservoir findings converge directly with Tim Henrich's gut-macrophage data and Lael Yonker's neutrophil-NETosis findings, and support the broader gut-persistence model from Buggert and Huot.",
      relatedTalks: ["henrich-tissue", "yonker-pediatric", "buggert-gut", "huot-nhp"]
    },
    {
      id: "murakami-csf",
      speaker: "Mario Murakami",
      institution: "Harvard Medical School",
      title: "CSF flow disruption in craniocervical instability",
      theme: "Neurology",
      laySummary: "A pilot brain-imaging study found that patients with craniocervical instability have impaired cerebrospinal fluid flow, which could explain the brain fog and fatigue that overlap with ME/CFS.",
      technicalSummary: "Murakami presented a pilot study of CSF flow disruption in craniocervical instability (CCI) using a 7T fMRI sequence developed at the Martinos Center that couples dynamic phase-contrast imaging with velocity and direction calculation. The hypothesis is that CCI compresses the narrow region near the fourth ventricle and cerebral aqueduct, disrupting CSF flow (the glymphatic waste-clearance system) and allowing metabolite accumulation that drives brain fog, fatigue, and autonomic dysfunction — symptoms overlapping with ME/CFS. In a pilot of 8 subjects (3 controls, 5 CCI patients), with manually drawn ROIs just below the fourth ventricle and physiologic regression of cerebellar and respiratory signals, CCI patients showed decreased CSF flow amplitude and velocity in this region. Expansion is planned to include ME/CFS, Long COVID, and chronic Lyme groups; CSF flow is mechanically and therapeutically addressable, making this a candidate intervention target. The pilot supports a structural-mechanical contributor to neuroinflammation that may compound the immune mechanisms described elsewhere in the symposium.",
      relatedTalks: []
    },
    {
      id: "elia-invivyd",
      speaker: "Marc Elia",
      institution: "Invivyd",
      title: "Monoclonal antibodies as a targeted therapeutic strategy for Long COVID and post-vaccination syndrome",
      theme: "Therapeutics",
      laySummary: "A biotech company is repurposing its newer COVID-prevention antibody (VYD-2311) as a potential Long COVID treatment, betting that sustained high-dose dosing can clear persistent virus.",
      technicalSummary: "Elia, presenting without slides, framed monoclonal antibodies as a targeted therapeutic strategy for Long COVID and post-vaccination syndrome, drawing on field reports that some immunocompromised users of Pemgarda (Invivyd's commercially available SARS-CoV-2 prevention mAb) experienced unexpected Long COVID symptom relief. The company convened an in-house clinical-science group including Amy Proal, David Putrino, Akiko Iwasaki, and Michael Peluso to design Long COVID trials of a newer antibody (VYD-2311) using high dose and protracted treatment duration to address the variant-escape problem that limited earlier antibody trials. The discovery platform uses a yeast-based combinatorial library to walk antibodies into conserved, cryptic, “immunorecessive” Class-1-fork epitopes that have not been under selection from natural human immune pressure — an approach designed to retain activity across variants. Trial design is intended to produce a definitive readout: a positive result would support antibody therapy for multiple post-acute viral syndromes, and a negative result would constitute substantive learning. This is the first commercial antibody program presented at the symposium that specifically targets persistent SARS-CoV-2 antigen as a Long COVID mechanism.",
      relatedTalks: []
    },
    {
      id: "freire-saliva",
      speaker: "Marcelo Freire",
      institution: "J. Craig Venter Institute",
      title: "Salivary proteomics as a trial endpoint in Long COVID vagus-nerve stimulation",
      theme: "Diagnostics",
      laySummary: "Saliva-based protein analysis can track whether a Long COVID treatment is reducing inflammation in real time, making it a useful trial endpoint that doesn't require blood draws.",
      technicalSummary: "Freire's lab focuses on the salivary proteome (3,209 proteins catalogued in the NIH-funded salivaryproteome.org database) as a noninvasive multi-omic readout; prior work showed that saliva-based models predict acute COVID severity well, with NETs detected in moderate-to-severe but not mild acute disease. The current work applies salivary proteomics as a trial endpoint in David Putrino's vagus-nerve-stimulation study (50 subjects, active versus sham, five visits over 12 weeks). Within-treatment comparisons showed the sham group had 139 upregulated and 32 downregulated proteins (an inflammatory drift), while the active VNS arm showed roughly half the upregulation and increased downregulation — an inflammatory inversion. Specific markers diverged: sham persistently upregulated serum amyloid A4 (linked to rheumatoid arthritis, atherosclerosis, and oncology), while the active arm downregulated gamma-synuclein and other inflammatory mediators. To the team's knowledge, this is the first use of salivary proteomics as a therapeutic-response endpoint in a Long COVID interventional trial.",
      relatedTalks: ["putrino-mmt"]
    }
  ]
};
