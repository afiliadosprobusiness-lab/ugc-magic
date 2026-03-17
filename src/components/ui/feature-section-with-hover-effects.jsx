import { cn } from "../../lib/utils";
import { useLanguage } from "../../contexts/LanguageContext";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('pain.feat.1.title'),
      description: t('pain.feat.1.desc'),
      icon: <IconTerminal2 />,
    },
    {
       title: t('pain.feat.2.title'),
       description: t('pain.feat.2.desc'),
       icon: <IconEaseInOut />,
    },
    {
       title: t('pain.feat.3.title'),
       description: t('pain.feat.3.desc'),
       icon: <IconCurrencyDollar />,
    },
    {
       title: t('pain.feat.4.title'),
       description: t('pain.feat.4.desc'),
       icon: <IconCloud />,
    },
    {
       title: t('pain.feat.5.title'),
       description: t('pain.feat.5.desc'),
       icon: <IconRouteAltLeft />,
    },
    {
       title: t('pain.feat.6.title'),
       description: t('pain.feat.6.desc'),
       icon: <IconHelp />,
    },
    {
       title: t('pain.feat.7.title'),
       description: t('pain.feat.7.desc'),
       icon: <IconAdjustmentsBolt />,
    },
    {
       title: t('pain.feat.8.title'),
       description: t('pain.feat.8.desc'),
       icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-white/5",
        (index === 0 || index === 4) && "lg:border-l border-white/5",
        index < 4 && "lg:border-b border-white/5"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-vyra-violet/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-vyra-violet/5 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-vyra-violet group-hover/feature:text-glow-cyan transition-colors">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-white/10 group-hover/feature:bg-vyra-violet transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/50 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
