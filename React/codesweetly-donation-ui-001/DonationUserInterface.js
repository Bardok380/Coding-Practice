function DonationUserInterface() {
    const[donate, setDonate] = React.useState(false);

    function createUserInterface() {
        if (donate) {
            return (
                <p>
                    <a href="https://www.buymeacoffee.com/codesweetly">Support page</a>.
                    Thank you so much! 🎉
                </p>
            );
        }
        return <button onClick={() => setDonate(true)}>☕ Buy me a coffee</button>;
    }
    return createUserInterface();
}

const root = ReactDOM.createRoot(document.getElementById("donation-ui"));
root.render(<DonationUserInterface />);