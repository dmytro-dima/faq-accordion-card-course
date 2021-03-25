import React, {useState} from "react";
import {QuestionsAccordions} from "./questions-accordions";

export const AccordionWrapper = () => {
  const [activeQuestion, setActiveQuestion] = useState('')
  const questions = [
    {
      title: 'How many team members can I invite?',
      question: 'You can invite up to 2 additional users on the Free plan. There is no limit on\n team members for the Premium plan.'
    },
    {
      title: 'What is the maximum file upload size?',
      question: 'No more than 2GB. All files in your account must fit your allotted storage space.'
    },
    {
      title: 'How do I reset my password?',
      question: 'Click “Forgot password” from the login page or “Change password” from your profile page.\n' +
        '              A reset link will be emailed to you.'
    },
    {
      title: 'Can I cancel my subscription?',
      question: 'Yes! Send us a message and we’ll process your request no questions asked.'
    },
    {
      title: 'Do you provide additional support?',
      question: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    }
  ]
  return (
    <div className="accordion__wrapper">
      <h1 className="title__accordion">FAQ</h1>
      {questions.map(question => <QuestionsAccordions {...question} activeQuestion={{activeQuestion, setActiveQuestion}} key={JSON.stringify(question)} />)}
    </div>
  );
}