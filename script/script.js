// ナビゲーションのスムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// スクロールアニメーション
function fadeInOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('load', fadeInOnScroll);
window.addEventListener('scroll', fadeInOnScroll);

// React version demo
function ReactVersionDemo() {
    const [version, setVersion] = React.useState('');

    React.useEffect(() => {
        setVersion(React.version);
    }, []);

    return React.createElement('div', null,
        React.createElement('h3', null, 'Current React Version:'),
        React.createElement('p', null, version)
    );
}

ReactDOM.render(
    React.createElement(ReactVersionDemo),
    document.getElementById('react-version-demo')
);

// Feature demo
function FeatureDemo() {
    const [count, setCount] = React.useState(0);

    return React.createElement('div', { className: 'interactive-demo' },
        React.createElement('h3', null, 'React State Demo'),
        React.createElement('p', null, `Count: ${count}`),
        React.createElement('button', { onClick: () => setCount(count + 1) }, 'Increment')
    );
}

ReactDOM.render(
    React.createElement(FeatureDemo),
    document.getElementById('feature-demo')
);

// Component demo
function ComponentDemo() {
    function Welcome(props) {
        return React.createElement('h3', null, `Hello, ${props.name}`);
    }

    return React.createElement('div', { className: 'interactive-demo' },
        React.createElement(Welcome, { name: 'React Developer' })
    );
}

ReactDOM.render(
    React.createElement(ComponentDemo),
    document.getElementById('component-demo')
);

// State & Props demo
function StatePropsDemo() {
    const [name, setName] = React.useState('');

    function GreetingComponent(props) {
        return React.createElement('p', null, `Welcome, ${props.name || 'Guest'}!`);
    }

    return React.createElement('div', { className: 'interactive-demo' },
        React.createElement('input', {
            type: 'text',
            placeholder: 'Enter your name',
            value: name,
            onChange: (e) => setName(e.target.value)
        }),
        React.createElement(GreetingComponent, { name: name })
    );
}

ReactDOM.render(
    React.createElement(StatePropsDemo),
    document.getElementById('state-props-demo')
);

// Hooks demo
function HooksDemo() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return React.createElement('div', { className: 'interactive-demo' },
        React.createElement('p', null, `You clicked ${count} times`),
        React.createElement('button', { onClick: () => setCount(count + 1) }, 'Click me')
    );
}

ReactDOM.render(
    React.createElement(HooksDemo),
    document.getElementById('hooks-demo')
);

// Performance demo
const MemoizedComponent = React.memo(function MemoizedComponent({ text }) {
    console.log('Rendering MemoizedComponent');
    return React.createElement('p', null, text);
});

function PerformanceDemo() {
    const [count, setCount] = React.useState(0);
    const memoizedValue = React.useMemo(() => computeExpensiveValue(count), [count]);

    function computeExpensiveValue(num) {
        console.log('Computing expensive value...');
        return num * 2;
    }

    return React.createElement('div', { className: 'interactive-demo' },
        React.createElement('button', { onClick: () => setCount(count + 1) }, 'Increment'),
        React.createElement('p', null, `Count: ${count}`),
        React.createElement('p', null, `Expensive computation: ${memoizedValue}`),
        React.createElement(MemoizedComponent, { text: 'I only re-render when my props change' })
    );
}

ReactDOM.render(
    React.createElement(PerformanceDemo),
    document.getElementById('performance-demo')
);

// Ecosystem demo
function EcosystemDemo() {
    return React.createElement('div', { className: 'interactive-demo' },
        React.createElement('h3', null, 'Popular React Ecosystem Libraries'),
        React.createElement('ul', null,
            React.createElement('li', null, 'Redux - State Management'),
            React.createElement('li', null, 'React Router - Navigation'),
            React.createElement('li', null, 'Styled Components - CSS-in-JS'),
            React.createElement('li', null, 'Next.js - Server-Side Rendering')
        )
    );
}

ReactDOM.render(
    React.createElement(EcosystemDemo),
    document.getElementById('ecosystem-demo')
);

// Best practices demo
function BestPracticesDemo() {
    return React.createElement('div', { className: 'interactive-demo' },
        React.createElement('h3', null, 'React Best Practices'),
        React.createElement('ol', null,
            React.createElement('li', null, 'Use functional components and hooks'),
            React.createElement('li', null, 'Keep components small and focused'),
            React.createElement('li', null, 'Use PropTypes for type checking'),
            React.createElement('li', null, 'Memoize expensive computations'),
            React.createElement('li', null, 'Use keys for list items')
        )
    );
}

ReactDOM.render(
    React.createElement(BestPracticesDemo),
    document.getElementById('best-practices-demo')
);

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

// Code playground
function createCodePlayground(containerId, initialCode) {
    const container = document.getElementById(containerId);
    const textarea = document.createElement('textarea');
    textarea.value = initialCode;
    const runButton = document.createElement('button');
    runButton.textContent = 'Run Code';
    const output = document.createElement('div');

    container.appendChild(textarea);
    container.appendChild(runButton);
    container.appendChild(output);

    runButton.addEventListener('click', function() {
        try {
            const result = eval(textarea.value);
            output.textContent = `Output: ${result}`;
        } catch (error) {
            output.textContent = `Error: ${error.message}`;
        }
    });
}

// Initialize code playgrounds
document.addEventListener('DOMContentLoaded', () => {
    createCodePlayground('jsx-playground', `
// JSX Example
const element = <h1>Hello, world!</h1>;
ReactDOM.render(element, document.getElementById('jsx-output'));
    `);

    createCodePlayground('hooks-playground', `
// Hooks Example
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
ReactDOM.render(<Counter />, document.getElementById('hooks-output'));
    `);
});

// Tooltips
const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tooltip => {
    const tooltiptext = tooltip.querySelector('.tooltiptext');
    tooltip.addEventListener('mouseover', () => {
        tooltiptext.style.visibility = 'visible';
        tooltiptext.style.opacity = '1';
    });
    tooltip.addEventListener('mouseout', () => {
        tooltiptext.style.visibility = 'hidden';
        tooltiptext.style.opacity = '0';
    });
});

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }
});

// Simple routing
function handleRouting() {
    const path = window.location.hash.slice(1);
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    const activeSection = document.getElementById(path) || document.getElementById('intro');
    activeSection.style.display = 'block';
}

window.addEventListener('hashchange', handleRouting);
window.addEventListener('load', handleRouting);

console.log('React learning guide script loaded successfully!');

// モバイルメニューの切り替え
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// JavaScriptエディタの初期化
document.addEventListener('DOMContentLoaded', () => {
    const editor = ace.edit("js-editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/javascript");
    editor.setValue("// ここにJavaScriptコードを入力してください\n\nconsole.log('Hello, React!');");

    const runButton = document.createElement('button');
    runButton.textContent = 'コードを実行';
    runButton.onclick = () => {
        try {
            eval(editor.getValue());
        } catch (error) {
            console.error('実行エラー:', error);
        }
    };

    document.getElementById('js-editor').parentNode.insertBefore(runButton, editor.container.nextSibling);
});