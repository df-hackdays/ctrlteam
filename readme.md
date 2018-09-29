CTRL Team

Section 1. Project Title and Overview

	Adaptive Lesson Delivery and Scoring System

Section 2. Purpose and Need:

	The vision of the project is to make the CLC brand synonymous to having a successful career in corporate leadership or as a successful  entrepreneur. We plan to get there by accelerating traditional learning methods without sacrificing quality:
		○ Prioritize instructor and mentor time to delivering high-touch experience where it counts
		○ Accelerate learner's knowledge absorption rate
		○ Above-average participation rate (retention)

Section 3. Business Divers and Significance

	Business driver: Scarce resources
			i. Volunteer's precious time
			ii. Learner's absorption threshold
			iii. CLC's limited resources, being a not-for-profit organization
	
	Significance:
		CLC has limited resources given the nature of the business model. Creative use of open source technology as well as freely available (or low-fee) web tools will enable CLC to achieve the 10MM target without sacrificing lesson quality.  Viewing the problem domain at another angle allows CLC to experiment on alternate delivery methods to complement their existing programs. Tweaks can be made to both existing and experimental delivery programs to achieve the target based on measurable metrics afforded by the solution.

Section 4. Benefits and Costs

	Benefits:
		a. Target learning makes for accelerated lesson delivery without sacrificing quality
		b. Accessibility-friendly implementation. No one with disability will feel left behind.
		c. "You're only as fast as your slowest member" no longer applies - adaptive learning, adaptive testing
		d. Q&A chatbot to answer commonly asked questions and free-up instructors and mentors to deliver high-touch experience where it counts
		e. ML models including NLP to deliver adaptive lessons based on adaptive test frees up other resources
	
	Costs:
		TBD

Section 5. Implementation Method

	Tool Stack Composition (non-exhaustive list):
		* Private Youtube videos of varying lengths, mostly short to accommodate various learning absorption rates
		* Cloud Application Platform
		* QnA maker AI - intelligent Q&A chatbot
		* MongoDB, REACT, Node.js
		* Python + Tensorflow or similar

	High-level walkthrough how it will work.
		To cater to learners with varying experience levels, the learners need to undertake an automated diagnostic testing 	system (ideally disguised as a game) that adjusts the degree of difficulty (11-levels) of each successive question depending on the learner's skill.  Based on the overall score, a trained model will determine how succeeding lessons are delivered based on how the learner answered the questions. Factors include, but not limited to: 
			* Speed of correct response - level of confidence about the topic
			* Incorrect responses - consider adding to next/future lesson
			* Partial marks on hard questions - consider introducing reminder/refresher vs. a full lesson next
		
		The learner starts a lesson determined to be the best fit based on their latest score.  After the lesson, another set of adaptive questions will be introduced following the same "intelligent delivery" method. This repeats until the end of the module. 
		
		Learners can finish at their own pace with easy access to mentors and instructors anytime they are stuck. They will also have access to an intelligent Q&A bot where most common questions asked previously will be stored.
		
		2.0 version: ML will auto-stitch short videos into consumable chunks depending on the adaptive exam results.

Section 6. Timeline

	TBD

Section 7. Requirements

	- Instructor-recorded videos uploaded to a private channel on YouTube with closed captioning and described video
	- Access to videos granted to enrolled learners (managed permissions)
	- Existing FAQ repository (document, web, etc.) uploaded/linked to qnamaker.ai
	- Cloud-hosted backend and front-end
	- Platform agnostic interface
	- Application of ML modeling to adaptive test results to predict next best lesson
	- Siri-like assistant to handle accessibility needs of visually impaired when using Q&A bot 

Section 8. Expected Outcomes

PPT attached
