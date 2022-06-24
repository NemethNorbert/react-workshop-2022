import {useCachedState} from './App.js';

function PremiumConversion() {
    const [premium, setPremium] = useCachedState('premium', false);

    const premiumSection =
        premium === true ?
        <span><g-emoji class="g-emoji" alias="gem" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f48e.png">💎</g-emoji> Premium conversion</span> : 
        <button type="button" onClick={() => setPremium(true)}>Become Premium</button>;

    return (
        <div>
            {premiumSection}
        </div>
    )
}

export default PremiumConversion;