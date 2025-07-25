export const metadata = {
    title: 'aiphrodite.ai - AI-based ad testing',
    description: 'testing ads, the smarter way',
}

export default function AiGovernance() {
    return (
        <>
            <section className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    <h1><strong>AI Governance Practices</strong></h1>
                    <h2><strong>Overview</strong></h2>
                    <p>aiphrodite is committed to the responsible, transparent, and secure development of artificial intelligence technologies as part of its Services (herein referred to as “AI Services”). This document outlines aiphrodite's approach to AI governance and compliance. aiphrodite aligns its practices with international standards to ensure its AI Services are trustworthy, compliant, and suitable for the needs of its customers and society at large.</p>

                    <p>These policies and practices may change as the Services and industry evolve, so please check back regularly for updates.</p>

                    <h2><strong>Guiding Principles</strong></h2>
                    <h3><strong>Responsible Innovation</strong></h3>
                    <p>aiphrodite is guided by a framework of responsible artificial intelligence innovation whereby it adheres to principles of Transparency, Consent and Real-time Safety throughout its AI supply chain. This means aiphrodite requires clear disclosure of AI nature in all interactions with AI Services, whether it's for public-facing deployments or customer-specific implementations.</p>

                    <p>aiphrodite's platform and policies are integrated with a trust and safety layer that is designed to help prevent harmful interactions and ensure responsible use in real-time. This includes a prescriptive Acceptable Use Policy and further operationalized by content moderation tools.</p>

                    <h3><strong>Rights of Customers</strong></h3>
                    <p>aiphrodite is committed to respecting the rights of organizations and businesses that use its Services, by communicating transparently and empowering them with choice. The Services, and aiphrodite's related practices, incorporate measures designed to respect their intellectual property rights, protect their data, and maintain confidentiality. As further described below in the section titled 'Governing Agreements,' Customers are not responsible for aiphrodite's separate research and development decisions. Any Inputs and Interactions to the aiphrodite Services are processed on a 'limited data retention' basis, meaning that these Inputs and Interactions are only processed on a transient basis for the limited period necessary to generate the Interaction. You can read more about this in our <a href="/terms">Terms and Conditions</a>.</p>

                    <h3><strong>Rights of Individuals</strong></h3>
                    <p>aiphrodite is deeply committed to upholding the rights of individuals and to protect the public from harmful content and misuse of AI technologies. aiphrodite's Acceptable Use Policy prohibits the use of Services for activities that infringe on individual rights, such as creating defamatory, inciteful, abusive, or discriminatory content. aiphrodite enforces these restrictions to help ensure that the AI Services are used responsibly, aligning with the broader goal of safeguarding privacy, promoting freedom of expression within ethical bounds, and preventing discrimination.</p>

                    <h2><strong>Key Areas of Impact</strong></h2>
                    <h3><strong>Accountability & Explainability</strong></h3>
                    <p>aiphrodite and its customers have a shared responsibility to prevent abuse and mitigate harm. To foster clarity and initiative between the parties in this regard, aiphrodite integrates a structured approach to defining roles and reinforcing responsibilities along the entire AI supply chain, beginning with R&D and model creation and extending through to customer deployment.</p>

                    <h3><strong>Roles under Regulations</strong></h3>
                    <p>aiphrodite's role and responsibilities, as well as those of its customers, shift based on the stage of the AI supply chain and the applicable legal framework. When creating and pre-training aiphrodite's AI Services, aiphrodite serves as the "controller" under privacy frameworks like GDPR and the UK GDPR, and when making these services available to customers as part of the Services, it serves as a "provider" under AI frameworks like the EU AI Act.</p>

                    <p>However, once customers choose to use the Services, they take on the role of "deployer" under the EU AI Act, and under privacy law, they assume the responsibilities of the controller (as they determine the purposes and means of processing), while aiphrodite transitions to the role of "processor." To the best of aiphrodite's knowledge, its AI Services, when used as intended and in accordance with the Acceptable Use Policy, are not classified as High-Risk AI Systems under the EU AI Act.</p>

                    <h3><strong>Customer Choice</strong></h3>
                    <p>The Services are intended for use by businesses of all sizes, across diverse industries and geographies. As a processor and provider of the Services, aiphrodite offers features and controls to help customers meet their unique compliance obligations, however, it is ultimately the customers' responsibility to deploy and use the Services in accordance with the laws that apply to them. For instance, all AI Persona interactions include clear identification of their AI nature, and customers can implement additional transparency measures as needed. Please reach out to info@aiphrodite.ai for more information about available controls, including interaction management, integration options, and permission settings.</p>

                    <h2><strong>AI Governance Practices</strong></h2>
                    <h3><strong>Internal Governance & Policies</strong></h3>
                    <p>aiphrodite's internal governance and policies are designed to ensure that roles and responsibilities are defined and enforced for AI Persona development and monitoring. The following are examples of roles designed to oversee AI-related decisions and their impacts:</p>

                    <ul className="list-disc pl-6">
                        <li><strong>AI Governance:</strong> This aiphrodite team takes on the responsibility for reviewing AI-related decisions, particularly those that may have ethical implications, such as the development of new AI Personas and AI Persona features, to ensure they align with aiphrodite's responsible AI standards.</li>
                        <li><strong>Security & Compliance:</strong> aiphrodite's formal information security program includes clearly defined information security roles, responsibilities, and accountability. These individuals help ensure that the AI Technology is secure and comply with relevant regulations.</li>
                        <li><strong>Engineering and Research Leads:</strong> These individuals are responsible for the design and development of AI Services and follow "Secure Development Lifecycle" processes to ensure they meet technical, ethical, and legal requirements.</li>
                        <li><strong>Trust & Safety:</strong> The aiphrodite team is dedicated to real-time monitoring and enforcement of safety protocols for AI interactions.</li>
                    </ul>

                    <h3><strong>Governing Agreements</strong></h3>
                    <p>aiphrodite's governing agreements with its customers are designed to promote accountability by allocating the rights, responsibilities and remedies of a party based upon their relative ability to exercise control and influence over the means and purposes of processing. For example, aiphrodite offers an IP indemnification to its customers for the AI technology it provides, because as between the parties, aiphrodite unilaterally makes its own R&D decisions. Similarly, customers are responsible for their specific implementation and use of AI Services, including the context and manner of deployment.</p>

                    <h3><strong>Explainability</strong></h3>
                    <p>aiphrodite is committed to making its AI Services understandable and explainable to customers and their users. The aiphrodite conversation engine which enables real time AI personas entails:</p>

                    <ol className="list-decimal pl-6">
                        <li>aiphrodite's AI Personas simulate human reaction to visual inputs for the sake of predictions, acting as the persona's "brain".</li>
                        <li>aiphrodite then accepts and predicts the performance of each of a user's uploaded assets as its prediction within the context of a specific defined target persona.</li>
                        <li>aiphrodite then optionally leverages an off-the-shelf LLM to refine its series of predictions into an easily "human-readable" summarization.</li>
                    </ol>

                    <h3><strong>Fairness & Transparency</strong></h3>
                    <p>aiphrodite's AI Services are designed and operated to help ensure equitable outcomes for all users. aiphrodite implements bias mitigation strategies at multiple stages of the AI lifecycle, from training data selection to real-time monitoring, that are designed to avoid discrimination based on race, gender, age, and other protected characteristics. Regular audits and bias assessments are conducted to monitor and correct emerging biases.</p>

                    <h3><strong>Fairness & Transparency</strong></h3>
                    <p>aiphrodite Services are designed and operated to help ensure equitable outcomes for all users. aiphrodite implements bias mitigation strategies at multiple stages of the AI lifecycle, from training data selection to real-time monitoring, that are designed to avoid discrimination based on race, gender, age, and other protected characteristics. Regular audits and bias assessments are conducted to monitor and correct emerging biases.</p>

                    <h3><strong>Transparency-by-Design</strong></h3>
                    <p>Transparency is inherent to the Services given their nature and is fundamental to aiphrodite's practices. In its governing agreements, aiphrodite provides its customers with information about its data processing practices, safety measures, and responsible AI considerations.</p>

                    <h3><strong>Training, Data and Provenance</strong></h3>
                    <p>aiphrodite specializes in developing AI Services and AI Personas that simulate human response to visual inputs, enabling users to conduct targeted ad testing and analysis. These AI Personas are designed to enhance user engagement and provide insights into ad performance through realistic interactions. aiphrodite's AI Services are not intended for general-purpose AI applications or for creating standalone AI models. Our approach to AI development focuses on creating safe, engaging, and appropriate interactions while maintaining clear ethical boundaries. aiphrodite develops its AI Services using carefully curated training data and implements robust safeguards to ensure responsible behavior.</p>

                    <h3><strong>No Customer Data</strong></h3>
                    <p>aiphrodite does not use Customer Data, including inputs or outputs, to pre-train its AI Personas. Any processing of Customer Data that requires, or results in, the fine-tuning of AI Personas is subject to the written instruction of the customer, in accordance with their governing agreement.</p>

                    <h3><strong>Documented Practices</strong></h3>
                    <p>aiphrodite establishes and maintains documented processes for tracking the origin and history of training data used to develop its AI Personas, however, the specifics of the data sets and their preparation processes are proprietary and confidential, and only disclosed in certain cases, such as where aiphrodite is required by law to do so.</p>

                    <h3><strong>Security and Privacy</strong></h3>
                    <p>aiphrodite employs appropriate data protection and privacy measures designed to ensure that its AI Services are developed in a privacy-centric and compliant manner, and that their use by customers, including any processing of Customer Data, is safeguarded and secure.</p>

                    <p>aiphrodite adheres to the principles of data minimization, encryption, and secure storage. Security by design and by default is integral to aiphrodite's development process. We implement industry-leading security practices, including secure coding, regular penetration testing, and continuous vulnerability assessments. Our AI Services are designed to be resilient to both accidental failures and malicious attacks.</p>

                    <h3><strong>Safety and Health</strong></h3>
                    <p>aiphrodite recognizes the potential impact of AI Services on the well-being of individuals. Accordingly, we design our AI Services with safety as a primary concern, implementing real-time safeguards to prevent harm, including:</p>

                    <ul className="list-disc pl-6">
                        <li>Active content moderation</li>
                        <li>Interaction monitoring</li>
                        <li>Rapid response protocols</li>
                    </ul>

                    <h3><strong>Red Teaming</strong></h3>
                    <p>aiphrodite regularly tests its trust and safety measures, using independent experts to test the robustness of safety systems. Practices such as red teaming of interactions are used to continuously improve our safeguards.</p>

                    <h3><strong>Ethical Impact Assessments</strong></h3>
                    <p>aiphrodite's development process includes comprehensive ethical impact assessments conducted prior to launching any new AI Services feature or update. These assessments evaluate potential psychological and emotional impacts on users and the broader public.</p>

                    <h3><strong>Accessibility</strong></h3>
                    <p>aiphrodite is committed to making its AI Services accessible, regardless of ability. This includes support for assistive technologies, adherence to accessibility standards, and continuous improvement based on user feedback.</p>

                    <h3><strong>Ongoing Improvements & Audits</strong></h3>
                    <p>aiphrodite is committed to the continuous monitoring and improvement of its AI Services. We regularly monitor performance, incorporate feedback, and adapt to new developments in AI technology and regulation.</p>

                    <p>Further, aiphrodite has a robust audit system in place designed to continuously monitor its AI Services for compliance with the principles and tenets described in this document. Auditing is performed by internal parties and soon to undergo auditing by accredited external firms.</p>
                </div>
            </section>
        </>
    );
}
