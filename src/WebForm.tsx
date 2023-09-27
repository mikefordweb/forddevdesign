import React, { useState, useEffect, MouseEvent, FocusEvent, FocusEventHandler, MouseEventHandler } from 'react';
import { useParams, useLocation, useNavigate, redirect } from 'react-router-dom';

function WebForm() {
    
    let [clientsClass, setClientsClass] = useState<string>("move-right");
    let [slideUpName, setSlideUpName] = useState<string>("");
    let [slideUpEmail, setSlideUpEmail] = useState<string>("");
    let [slideUpSubject, setSlideUpSubject] = useState<string>("");
    let [slideUpMessage, setSlideUpMessage] = useState<string>("");
    let [focusName, setFocusName] = useState<string>("");
    let [focusEmail, setFocusEmail] = useState<string>("");
    let [focusSubject, setFocusSubject] = useState<string>("");
    let [focusMessage, setFocusMessage] = useState<string>("");
    let [name, setName] = useState<string>("");
    let [email, setEmail] = useState<string>("");
    let [subject, setSubject] = useState<string>("");
    let [message, setMessage] = useState<string>("");
    let [nameError, setNameError] = useState<string>("");
    let [emailError, setEmailError] = useState<string>("");
    let [subjectError, setSubjectError] = useState<string>("");
    let [messageError, setMessageError] = useState<string>("");

    const onChangeName = (ev: React.FormEvent<HTMLInputElement>) => {
        setName(ev.currentTarget.value);
        if (ev.currentTarget.value === '') {
            setNameError('This is a required field');
        } else {
            setNameError('');
        }
    }

    const onChangeEmail = (ev: React.FormEvent<HTMLInputElement>) => {
        setEmail(ev.currentTarget.value);
        if (ev.currentTarget.value === '') {
            setEmailError('This is a required field');
        } else {
            setEmailError('');
        }
    }

    const onChangeSubject = (ev: React.FormEvent<HTMLInputElement>) => {
        setSubject(ev.currentTarget.value);
        if (ev.currentTarget.value === '') {
            setSubjectError('This is a required field');
        } else {
            setSubjectError('');
        }
    }

    const onChangeMessage = (ev: React.FormEvent<HTMLTextAreaElement>) => {
        setMessage(ev.currentTarget.value);
        if (ev.currentTarget.value === '') {
            setMessageError('This is a required field');
        } else {
            setMessageError('');
        }
    }

    const nameFocusInput = (ev: FocusEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpName('slide-up');
        }
        setFocusName("field-focus");
    }

    const nameBlurInput = (ev: FocusEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpName('');
            setNameError('This is a required field');
        } else {
            setNameError('');
        }
        setFocusName("");
    }

    const emailFocusInput = (ev: FocusEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpEmail('slide-up');
        }
        setFocusEmail("field-focus");
    }

    const emailBlurInput = (ev: FocusEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpEmail('');
            setEmailError('This is a required field');
        } else {
            setEmailError('');
        }
        setFocusEmail("");
    }

    const subjectFocusInput = (ev: FocusEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpSubject('slide-up');
        }
        setFocusSubject("field-focus");
    }

    const subjectBlurInput = (ev: FocusEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpSubject('');
            setSubjectError('This is a required field');
        } else {
            setSubjectError('');
        }
        setFocusSubject("");
    }

    const messageFocusInput = (ev: FocusEvent<any>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpMessage('slide-up');
            setFocusMessage("");
        } else {
            setFocusMessage("field-focus");
        }
    }

    const messageBlurInput = (ev: FocusEvent<any>) => {
        if (ev.currentTarget.value.length === 0) {
            setSlideUpMessage(''); 
            setMessageError('This is a required field');
        } else {
            setMessageError('');
        }
        setFocusMessage("");
        
    }

    const sendForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("sendForm:name: ", name);
        console.log("sendForm:email: ", email);
        console.log("sendForm:subject: ", subject);
        console.log("sendForm:message: ", message);
        let allFilled: boolean = true;
        if (name === '') {
            allFilled = false;
            setNameError('This is a required field');
        } else {
            setNameError('');
        }

        if (email === '') {
            allFilled = false;
            setEmailError('This is a required field');
        } else {
            setEmailError('');
        }

        if (subject === '') {
            allFilled = false;
            setSubjectError('This is a required field');
        } else {
            setSubjectError('');
        }

        if (message === '') {
            allFilled = false;
            setMessageError('This is a required field');
        } else {
            setMessageError('');
        }

        if (allFilled === true) {
            console.log("All Filled! Submit!");
        }
    }
    
    return (
        <>
            <div className="form-background-overlay"></div>
            <div className="web-form">
                <div className="web-form-left">
                    <div className="lets-connect">LET'S CONNECT
                    <div className="lets-connect-bar"></div></div>
                    <div className="webform-note">Tell us about your needs and let’s make it happen.</div>
                    <div className="social-icons">
                        <div className="social-icon">
                            <a href="#">
                                <img src="img/mail-icon.png"></img>
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="#">
                                <img src="img/linkedin-icon.png"></img>
                            </a>
                        </div>
                        <div className="social-icon">
                            <a href="https://www.youtube.com/@forddevdesign">
                                <img src="img/youtube-icon.png"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="web-form-fields">
                    <div className="web-form-title">Send A Message</div>
                    <div className="web-form-wrapper">
                        <label className={`web-form-label ${slideUpName}`}>Name</label>
                        <input type="text" className={`web-form-input ${focusName}`} value={name} onChange={onChangeName} onFocus={nameFocusInput} onBlur={nameBlurInput}></input>
                        {nameError !== '' ? <div className="name-error">{nameError}</div> : <></>}
                    </div>
                    
                    <div className="web-form-wrapper">
                        <label className={`web-form-label ${slideUpEmail}`}>Email</label>
                        <input type="text" className={`web-form-input ${focusEmail}`} value={email} onChange={onChangeEmail} onFocus={emailFocusInput} onBlur={emailBlurInput}></input>
                        {emailError !== '' ? <div className="email-error">{emailError}</div> : <></>}
                    </div>
                    <div className="web-form-wrapper">
                        <label className={`web-form-label ${slideUpSubject}`}>Subject</label>
                        <input type="text" className={`web-form-input ${focusSubject}`} value={subject} onChange={onChangeSubject} onFocus={subjectFocusInput} onBlur={subjectBlurInput}></input>
                        {subjectError !== '' ? <div className="subject-error">{subjectError}</div> : <></>}
                    </div>
                    <div className="web-form-wrapper form-message">
                        <label className={`web-form-label ${slideUpMessage}`}>Message</label>
                        <textarea className={`web-form-textarea ${focusMessage}`} value={message} onChange={onChangeMessage} onFocus={messageFocusInput} onBlur={messageBlurInput}></textarea>
                        {messageError !== '' ? <div className="message-error">{messageError}</div> : <></>}
                    </div>
                    <button className="send-button" onClick={sendForm}>Send</button>
                </div>
                
            </div>
        </>
    )
}

export default WebForm;