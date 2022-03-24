import BannerText from './BannerText'
import BannerImage from './BannerImage';

function Banner () {
    return (
        <div class="container-fluid header bg-main py-5 page-banner">
            <div class="container">
                <div class="row">
                    <BannerImage />
                    <BannerText />
                </div>
            </div>
        </div>
    );
}

export default Banner;