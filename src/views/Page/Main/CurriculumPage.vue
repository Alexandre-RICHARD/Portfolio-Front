<script setup>
import CurriculumVitae from "@static/pdf/CurriculumVitae.pdf";
const { dataObject } = require("@middlewares/data.js");
</script>

<template>
    <div class="curriculum-container">
        <p class="cv-indication">
            Retrouvez mon CV pdf
            <a
                :href="CurriculumVitae"
                target="_blank"
                class="cv-indication-link"
                title="Mon CV à télécharger"
            >ici
            </a>
        </p>
        <div class="categories description">
            <div class="title-box">
                <h2 class="title">Description</h2>
                <div class="line-up" />
            </div>
            <p class="description-text">
                <img
                    class="photo"
                    alt="Photographie de ma personne"
                    src="@static/images/portrait.png"
                >
                {{ dataObject.curriculumDesc }}
            </p>
        </div>

        <div class="categories skills">
            <div class="title-box">
                <h2 class="title">Compétences en développement</h2>
                <div class="line-up" />
            </div>
            <ul class="skills-list">
                <li v-for="skill in dataObject.skillsList" :key="skill">{{ skill }}</li>
            </ul>
        </div>

        <div class="group-flex">
            <div class="categories qualification">
                <div class="title-box">
                    <h2 class="title">Diplômes et Certification</h2>
                    <div class="line-up" />
                </div>
                <ul class="qualification-list">
                    <li
                        v-for="qualification in dataObject.qualificationsList"
                        :key="qualification"
                    >
                        {{ qualification }}
                    </li>
                </ul>
            </div>

            <div class="categories further-information">
                <div class="title-box">
                    <h2 class="title">Informations complémentaires</h2>
                    <div class="line-up" />
                </div>
                <ul class="further-information-list">
                    <li v-for="info in dataObject.informationsList" :key="info">{{ info }}</li>
                </ul>
            </div>
        </div>

        <div class="appear categories professional-experiences">
            <div class="title-box">
                <h2 class="title">Expériences professionnelles</h2>
                <div class="line-up" />
            </div>
            <div
                v-for="experience in dataObject.professionalExperiences.reverse()"
                :key="experience.key"
                class="appear one-of-them"
            >
                <div class="left">
                    <p class="whichone">{{ experience.title }}</p>
                    <p class="where">{{ experience.location }}</p>
                </div>
                <div class="middle">
                    <div class="date">
                        <p>{{ experience.firstDate }}</p>
                        <p v-if="experience.secondDate !== null">
                            {{ experience.secondDate }}
                        </p>
                    </div>
                    <div class="line-cache" />
                    <div class="line" />
                    <div class="line-uncache" />
                </div>
                <div class="right">
                    {{ experience.description }}
                </div>
            </div>
        </div>

        <div class="appear categories education">
            <div class="title-box">
                <h2 class="title">Formation</h2>
                <div class="line-up" />
            </div>
            <div
                v-for="study in dataObject.schoolCurriculum.reverse()"
                :key="study.key"
                class="appear one-of-them"
            >
                <div class="left">
                    <p class="whichone">{{ study.title }}</p>
                    <p class="where">{{ study.location }}</p>
                </div>
                <div class="middle">
                    <div class="date">
                        <p>{{ study.firstDate }}</p>
                        <p v-if="study.secondDate !== null">
                            {{ study.secondDate }}
                        </p>
                    </div>
                    <div class="line-cache" />
                    <div class="line" />
                    <div class="line-uncache" />
                </div>
                <div class="right">
                    {{ study.description }}
                </div>
            </div>
        </div>

        <div class="appear categories hobbies">
            <div class="title-box">
                <h2 class="title">Loisirs</h2>
                <div class="line-up" />
            </div>
            <ul class="hobbies-list">
                <li v-for="hobbie in dataObject.hobbiesList" :key="hobbie">
                    {{ hobbie }}
                </li>
            </ul>
        </div>

        <div class="appear categories quality">
            <div class="title-box">
                <h2 class="title">Qualités</h2>
                <div class="line-up" />
            </div>
            <ul class="qualities-list">
                <li v-for="quality in dataObject.qualitiesList" :key="quality">
                    {{ quality }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import "@styles/variables.scss";

.curriculum-container {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1000px;

    .cv-indication {
        margin: 20px auto;
        font-weight: 400;
        font-size: 20px;

        &-link {
            color: $color6;
            font-weight: 600;
            border: 3px solid $color6;
            padding: 2px 5px;
            border-radius: 8px;

            &:hover {
                background: $color14;
                color: $color1;
                border-color: transparent;
            }
        }
    }

    li {
        &::before {
            content: ">";
            font-weight: 700;
            font-size: 18px;
            color: $color6;
            padding-right: 5px;
        }
    }
}

.curriculum-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .group-flex {
        display: flex;
        flex-direction: column;
    }

    .categories {
        min-width: 28%;
        margin-right: 6px;

        .title-box {
            display: flex;
            width: 100%;
            margin: 10px 0;

            .title {
                font-weight: 500;
                letter-spacing: 1.2px;
                color: $color14;
                padding: 3px 12px;
                border-radius: 10px;
                border: 4px solid $color14;
            }

            .line-up {
                background-color: $color14;
                margin-left: -20px;
                width: 100%;
                height: 4px;
            }
        }
    }

    .description-text {
        color: $color14;
        text-align: justify;
        width: 100%;

        .photo {
            margin-right: 12px;
            width: 200px;
            border: 2px solid $color14;
            float: left;
        }
    }

    .hobbies {
        .hobbies-list {
            font-size: 16px;
            color: $color14;
        }
    }

    .quality {
        .qualities-list {
            font-size: 16px;
            color: $color14;
        }
    }

    .further-information {
        .further-information-list {
            font-size: 16px;
            color: $color14;
        }
    }

    .professional-experiences,
    .education {
        overflow: hidden;

        .one-of-them {
            display: flex;

            .left {
                padding-top: 50px;
                min-width: 30%;
                border-bottom: 1px solid $color111;

                .whichone {
                    font-size: 15px;
                    color: $color14;
                }

                .where {
                    font-size: 12px;
                    color: $color14;
                }
            }

            .middle {
                min-width: 25px;
                max-width: 25px;
                display: flex;
                justify-content: center;
                margin-right: 5px;

                .date {
                    z-index: $z-index-four;
                    height: fit-content;
                    position: absolute;
                    background-color: $color14;
                    color: $color0;
                    padding: 3px;
                    border-radius: 4px;

                    p {
                        letter-spacing: 0.5px;
                        text-align: center;
                        font-size: 14px;
                        font-weight: 500;
                    }
                }

                .line-cache {
                    z-index: $z-index-three;
                    height: 100%;
                    width: calc(50% - 1px);
                    background-color: $color0;
                }

                .line {
                    z-index: $z-index-two;
                    height: 100%;
                    width: 1px;
                    background-color: $color14;
                    box-shadow: 0px 0px 9px 1px $color14;
                }

                .line-uncache {
                    z-index: $z-index-one;
                    height: 100%;
                    width: calc(50% - 1px);
                    background-color: transparent;
                }
            }

            .right {
                padding-top: 50px;
                border-bottom: 1px solid $color111;
                font-size: 16px;
                color: $color14;
                text-align: justify;
                padding-bottom: 10px;
            }
        }
    }

    .skills {
        max-width: 50%;

        .further-information-list {
            background-color: $color0;
            font-size: 16px;
            color: $color14;
        }
    }

    .qualification {
        .further-information-list {
            font-size: 16px;
            color: $color14;
        }
    }
}

@media only screen and (min-width: 650px) {
    .curriculum-container {
        .professional-experiences,
        .education {
            .one-of-them {
                .left {
                    padding-top: 0;

                    .whichone {
                        font-size: 18px;
                    }

                    .where {
                        font-size: 14px;
                    }
                }

                .middle {
                    min-width: 115px;
                    max-width: 115px;

                    .line {
                        box-shadow: 0px 0px 18px 2px $color14;
                    }
                }

                .right {
                    padding-top: 0;
                    padding-bottom: 10px;
                }
            }
        }
    }
}
</style>
