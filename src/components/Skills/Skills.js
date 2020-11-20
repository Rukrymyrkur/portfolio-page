import React from "react";
import { a, useTrail, useSpring } from "react-spring";
import { SkillContainer, DescriptionContainer } from "../Skills/Skills.elements";
import { useInView } from 'react-intersection-observer';

// const currentStack = [``];
// const otherStack = [``];


const currentStack = [<svg viewBox="0 0 128 128">
<path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
</svg>, <svg viewBox="0 0 128 128">
		<path fill="#E44D26" d="M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"></path><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878h-44.937z"></path><path fill="#EBEBEB" d="M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"></path><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"></path>
	</svg>, <svg viewBox="0 0 128 128">
<path fill="#1572B6" d="M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
</svg>];

const workingOnStack = [<svg viewBox="0 0 128 128">
<g><path fill="#659AD3" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path><path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path></g>
</svg>, <svg viewBox="0 0 128 128">
<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"></stop><stop offset="1" stopColor="#306998"></stop></linearGradient><path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"></path><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"></stop><stop offset="1" stopColor="#FFE873"></stop></linearGradient><path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"></path><radialGradient id="c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"></stop><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"></stop></radialGradient><path opacity=".444" fill="url(#c)" enableBackground="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
</svg>,<svg viewBox="0 0 128 128">
<path fill="none" d="M0 0h128v128H0z"></path><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 0 1-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0 0 10 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0 0 26.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 0 1-2.61-6A9.12 9.12 0 0 1 87.37 70h.34a9.15 9.15 0 0 1 1 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 0 1-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0 0 16 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 0 0-17.27-20.85 62 62 0 0 0-34.74-10.59h-2.93a9.21 9.21 0 0 1-8 5.54h-.31a9.13 9.13 0 0 1-.3-18.25h.33a9 9 0 0 1 8 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 0 1 1.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 0 0-9.64 25.25 59.61 59.61 0 0 0 8.47 36.16 2.75 2.75 0 0 1 1.14-.16h.32a9.12 9.12 0 0 1 .33 18.24h-.33a9.16 9.16 0 0 1-9.12-8.79z" fill="#764abc"></path>
</svg>,<svg viewBox="0 0 128 128">
<title>Artboard 12</title><g id="original-wordmark"><path d="M40.53,77.82V50.74H42V55a5.57,5.57,0,0,0,.48-.6,7.28,7.28,0,0,1,6.64-4.12c3.35-.1,6.07,1.14,7.67,4.12a13.24,13.24,0,0,1,.32,12.14c-1.49,3.34-5.17,5-9.11,4.39a7.37,7.37,0,0,1-5.88-3.88V77.82ZM42,60.32c.13,1.32.18,2.26.33,3.18.58,3.62,2.72,5.77,6.08,6.16A6.91,6.91,0,0,0,56,65.27a11.77,11.77,0,0,0-.26-9.68,6.77,6.77,0,0,0-7.13-3.94,6.59,6.59,0,0,0-5.89,4.87A33.4,33.4,0,0,0,42,60.32Z"></path><path d="M88.41,64A7.92,7.92,0,0,1,80.67,71c-6.16.31-9.05-3.78-9.51-8.5A13.62,13.62,0,0,1,72.36,55a8.37,8.37,0,0,1,8.71-4.67,8,8,0,0,1,7.1,6.09,41.09,41.09,0,0,1,.69,4.5H72.67c-.3,4.28,2,7.72,5.26,8.55,4.06,1,7.53-.76,8.79-4.62C87,63.86,87.51,63.72,88.41,64ZM72.67,59.55H87.14c-.09-4.56-2.93-7.86-6.78-7.91C76,51.57,72.86,54.75,72.67,59.55Z"></path><path d="M91.39,64.1h1.42A5.69,5.69,0,0,0,96.15,69a8.73,8.73,0,0,0,7.58-.2,3.41,3.41,0,0,0,2-3.35,3.09,3.09,0,0,0-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25,35.25,0,0,1,94,59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21,10.21,0,0,1,9.76-.15,5.14,5.14,0,0,1,2.6,5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17,9.17,0,0,0-3,.91,3,3,0,0,0-1.74,3,3,3,0,0,0,2,2.82c1.54.56,3.15.92,4.73,1.36,1.27.35,2.59.58,3.82,1a4.51,4.51,0,0,1,3.1,4.07,4.81,4.81,0,0,1-2.59,5c-3.34,1.89-8.84,1.39-11.29-1A6.67,6.67,0,0,1,91.39,64.1Z"></path><path d="M125.21,56.61h-1.33c0-.18-.07-.34-.09-.49a4.35,4.35,0,0,0-3.54-4.18,8.73,8.73,0,0,0-5.61.27,3.41,3.41,0,0,0-2.47,3.25,3.14,3.14,0,0,0,2.4,3.16c2,.62,4.05,1,6.08,1.56a17,17,0,0,1,1.94.59,5,5,0,0,1,.27,9.31,11.13,11.13,0,0,1-9,.09,6.24,6.24,0,0,1-3.76-6.06l.56,0h.74a7.29,7.29,0,0,0,11.1,4.64,3.57,3.57,0,0,0,1.92-3.34,3.09,3.09,0,0,0-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43,35.43,0,0,1-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07,10.07,0,0,1,9.92-.11A5.23,5.23,0,0,1,125.21,56.61Z"></path><path d="M38.1,70.51a2.29,2.29,0,0,1-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06,2.76-4.12,5.41-6,8.16a2.2,2.2,0,0,1-2.7,1.06l7.73-10.37-7.19-9.37a2.39,2.39,0,0,1,2.85,1c1.67,2.44,3.52,4.77,5.36,7.24,1.85-2.45,3.68-4.79,5.39-7.21a2.15,2.15,0,0,1,2.68-1l-2.79,3.7c-1.25,1.65-2.48,3.31-3.78,4.92a1,1,0,0,0,0,1.49C33.29,64.07,35.66,67.25,38.1,70.51Z"></path><path d="M70.92,50.66v1.4a7.25,7.25,0,0,0-7.72,7.49q0,4.94,0,9.88c0,.35,0,.7,0,1.12H61.77V50.74h1.4V54.8C64.9,51.84,67.57,50.74,70.92,50.66Z"></path><path d="M2.13,60c.21-1,.34-2.09.63-3.11,1.73-6.15,8.78-8.71,13.63-4.9,2.84,2.23,3.55,5.39,3.41,8.95h-16C3.54,67.3,8.13,71.14,14,69.18a6.09,6.09,0,0,0,3.87-4.31c.31-1,.81-1.17,1.76-.88a8.12,8.12,0,0,1-3.88,5.93,9.4,9.4,0,0,1-10.95-1.4,9.85,9.85,0,0,1-2.46-5.78c0-.34-.13-.68-.2-1Q2.13,60.85,2.13,60Zm1.69-.43H18.29c-.09-4.61-3-7.88-6.88-7.91C7.09,51.6,4,54.8,3.81,59.55Z"></path></g>
</svg>];


const Skills = () => {
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  
  const trail = useTrail(currentStack.length, { opacity: inView ? 1 : 0 });
  const trailWorking = useTrail(workingOnStack.length, { opacity: inView ? 1 : 0 });

  const props = useSpring({
    opacity: inView ? 1 : 0,
})

	return (
    <>
	
		<SkillContainer id="skills">
    <a.div ref={ref} style={props}>
	<h2>2. Skills</h2>
      <DescriptionContainer>
      <h3>My stack:</h3>
			<ul>
				{trail.map(({ opacity }, i) => {
					const item = currentStack[i];
					return (
						<a.li style={{ opacity }} key={i}>
							{item}
						</a.li>
					);
				})}
			</ul>
      </DescriptionContainer>
	  <DescriptionContainer>
				<h3>Stack I'm working on:</h3>
			<ul>
				{trailWorking.map(({ opacity }, i) => {
					const item = workingOnStack[i];
					return (
						<a.li style={{ opacity }} key={i}>
							{item}
						</a.li>
					);
				})}
			</ul>
			</DescriptionContainer>
    </a.div>
		</SkillContainer>
    </>
	);
};

export default Skills
