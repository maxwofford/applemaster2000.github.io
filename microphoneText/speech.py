import speech_recognition as sr
import GoogleTranslate
import argparse


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument("-s", "--selfLanguage", required=True, type=str)
    parser.add_argument("-t", "--targetLanguage", required=True, type=str)

    args = parser.parse_args()
    r = sr.Recognizer()
    m = sr.Microphone()

    with m as source:
        print "say something"
        audio = r.listen(source)

    try:
        text = r.recognize_google(audio)
    except sr.UnknownValueError:
        print "Google Speech Recognition could not understand audio"
    except sr.RequestError as e:
        print "Could not request results from Google Speech Recognition service; {0}".format(e)

    if text is not None:
        try:
            translatedText = GoogleTranslate.translate(text, args.targetLanguage, args.selfLanguage)
        except:
            print "Something went wrong with the translation"
