<Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString(FirstLn)
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(SecondLn)
                                .pauseFor(500)
                                .deleteAll()
                                .typeString('Called Corona or COVID-19')
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(ThirdLn)
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(FourthLn)
                                .pauseFor(500)
                                .deleteAll()
                                .typeString(FifthLn)
                                .deleteChars(9)
                                .typeString('i nearly forgot to tell you.. <br>')
                                .pauseFor(500)
                                .typeString("#Stay_home")
                                .pauseFor(300)
                                .callFunction(() => {
                                    document.body.style['transitionDuration'] = '2s';
                                    document.body.style['backgroundColor'] = 'black';
                                    document.getElementById('dev').style['opacity'] = '0';
                                    document.getElementById('dev').style['transitionDuration'] = '2s';
                                    setTimeout(function(){
                                        document.getElementById('contactMe').style['transform'] = "translateY(-500px)";
                                        document.getElementById('contactMe').style['transitionDuration'] = '2s';
                                    },2500);
                                })
                                .start();
                            }}
                        />