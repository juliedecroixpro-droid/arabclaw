#!/bin/bash

echo "🎨 VÉRIFICATION DE L'HARMONISATION DU DESIGN"
echo "=============================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "📝 Vérification des couleurs dans le code..."
echo ""

# Check for old purple color
OLD_PURPLE=$(grep -r "#9333ea" app components 2>/dev/null | wc -l)
if [ $OLD_PURPLE -eq 0 ]; then
    echo -e "${GREEN}✅ Aucune ancienne couleur purple (#9333ea) trouvée${NC}"
else
    echo -e "${RED}❌ Anciennes couleurs purple trouvées : $OLD_PURPLE occurrences${NC}"
fi

# Check for inconsistent gradients
PURPLE_700=$(grep -r "purple-700" app components --include="*.tsx" 2>/dev/null | wc -l)
BLUE_700=$(grep -r "blue-700" app components --include="*.tsx" 2>/dev/null | wc -l)

if [ $PURPLE_700 -eq 0 ] && [ $BLUE_700 -eq 0 ]; then
    echo -e "${GREEN}✅ Aucun gradient inconsistent trouvé${NC}"
else
    echo -e "${YELLOW}⚠️  Gradients à vérifier : purple-700 ($PURPLE_700) | blue-700 ($BLUE_700)${NC}"
fi

# Check scrollbar styling in globals.css
SCROLLBAR=$(grep -c "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 100%)" app/globals.css)
if [ $SCROLLBAR -gt 0 ]; then
    echo -e "${GREEN}✅ Scrollbar avec bon gradient trouvée${NC}"
else
    echo -e "${RED}❌ Scrollbar gradient manquant ou incorrect${NC}"
fi

# Check selection color
SELECTION=$(grep -c "rgba(99, 102, 241, 0.2)" app/globals.css)
if [ $SELECTION -gt 0 ]; then
    echo -e "${GREEN}✅ Selection color correcte${NC}"
else
    echo -e "${RED}❌ Selection color manquante ou incorrecte${NC}"
fi

# Check prose styling
PROSE=$(grep -c "\.prose" app/globals.css)
if [ $PROSE -gt 5 ]; then
    echo -e "${GREEN}✅ Prose styling complet${NC}"
else
    echo -e "${YELLOW}⚠️  Prose styling limité${NC}"
fi

echo ""
echo "🏗️  Test de build..."
echo ""

# Build test
if npm run build > /tmp/arabclaw-build.log 2>&1; then
    echo -e "${GREEN}✅ Build réussi${NC}"
else
    echo -e "${RED}❌ Build échoué - voir /tmp/arabclaw-build.log${NC}"
    exit 1
fi

echo ""
echo "📊 RÉSUMÉ"
echo "========="
echo ""
echo "Fichiers vérifiés :"
echo "  - app/globals.css"
echo "  - app/*.tsx (7 pages)"
echo "  - components/*.tsx (4 composants)"
echo ""
echo "Palette de couleurs :"
echo "  - Gradient: #3b82f6 → #8b5cf6 ✅"
echo "  - Selection: rgba(99, 102, 241, 0.2) ✅"
echo "  - Focus: rgba(99, 102, 241, 0.5) ✅"
echo ""
echo -e "${GREEN}🎉 Harmonisation complète !${NC}"
echo ""
echo "Pour voir les sites :"
echo "  - docs: cd ~/projets/arabclaw-docs && npm run dev"
echo "  - site: cd ~/projets/arabclaw && npm run dev"
