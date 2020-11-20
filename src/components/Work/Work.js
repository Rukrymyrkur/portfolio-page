import React from 'react'
import AltAccordion from './AltAccordion/AltAccordion';
import { Wrapper, ProjectWrapper, ProjectDescription } from './Work.elements';

const Work = () => {
    return (
        <>
        <Wrapper id="work"><h2>3. Work</h2>
        <p>I would call myself a curious person. All that curiosity often drives me to do something that makes me smile and feel accomplished, but more often, it actually leads to a lot of unfinished projects.
                        I find myself thinking of a brilliant idea that I want to build, but have no knowledge how to make it, and then I feel sad. And watch more tutorials. And never get back to my brilliant idea.
                        Will this be the end of my motivation to become a web developer?</p>
            <AltAccordion title="1. Portfolio page">
                            <div className="strong">What's the point of this webpage?</div><div>
                        And then it hit me - what if I would <a className="externalLink" href="https://www.amazon.com/Show-Your-Work-Austin-Kleon/dp/076117897X" target="_blank">show my work</a>?
                        I enjoy designing and sewing myself, but I am so inactive in social media, only my closest friends know about it.
                        </div>
                        <div>
                            <div className="strong">How did you make it?</div>
                            I'm not going to say this is groundbreaking and never seen before, but I will still talk how I've made it!
                            I've decided to build it with React. I've made some small projects with it before, but never learnt how components work together when there are lots of them.
                            You could <a className="externalLink" href="/" target="_blank">check the source code</a> if you're interested!
                            I've also tried using styled-components. Have mixed feelings about them, but still kind of like it.</div>
                        <div>
                            I'll admit, sometimes I get into details too much, and not enough into overall project,
                            that's why I've changed the background 3 times and took too much time photoshopping images so they would 'blend well'.
                        </div>
            </AltAccordion>
            <AltAccordion title="2. Fashion design porfolio page">
                <div>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </div>
            </AltAccordion>
            <AltAccordion title="3. Quotes with API">
            Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste
            <br/>
            
            natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </AltAccordion>

        {/* <ProjectWrapper>
                <ProjectDescription>
                    <h3>Project title</h3>
                    <p>Project description more in depth</p>
                </ProjectDescription>
                <button className="source-button">Source Code</button>
                <button className="live-button">Live</button>
        </ProjectWrapper> */}

        </Wrapper>
        </>
    )
}

export default Work
